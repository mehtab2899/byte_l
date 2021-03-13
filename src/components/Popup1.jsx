import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Axios from "axios";
import Forms2 from "./Forms2";

class Popup1 extends Component {
	constructor() {
		super();
		this.state = {
			arr: [],
			arr1: [],
		};
	}

	handleModal() {
		this.setState({ show: !this.state.show });
	}

	async componentDidMount() {
		Axios.get("http://www.bytelabsindia.com/api/hospital/companies/1", {
			headers: {
				Authorization: "UGFzc0Fhb0dhbGVTZUxhZ2Fv",
			},
		})
			.then((res) => {
				this.setState({ arr: res.data });
			})
			.catch((error) => {
				console.error(error);
			});

		Axios.get("http://www.bytelabsindia.com/api/user/my_hospitals", {
			headers: {
				Authorization: "UGFzc0Fhb0dhbGVTZUxhZ2Fv",
			},
		})
			.then((res) => {
				this.setState({ arr1: res.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<Modal
					show={this.props.show}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					onHide={() => this.handleModal()}
				>
					<Modal.Header>
						<Modal.Title id="contained-modal-title-vcenter">
							<h5>Start New Preauth</h5>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h6>Search Patient Record</h6>
						<Forms2 company_name={this.state.arr} hos_name={this.state.arr1} />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Popup1;
