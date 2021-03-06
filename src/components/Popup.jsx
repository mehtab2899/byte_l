import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Forms from "./Forms";
import Axios from "axios";

export class popup extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}

	handleModal() {
		this.setState({ show: !this.state.show });
	}

	getData = () => {
		Axios.get(
			"http://www.bytelabsindia.com/api/patients/search?search_by=policy_number&search_value=12345",
			{
				headers: {
					Authorization: "UGFzc0Fhb0dhbGVTZUxhZ2Fv",
				},
			}
		)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		return (
			<div>
				<Button onClick={this.getData()}>get data</Button>
				<Button
					onClick={() => {
						this.handleModal();
					}}
					className="my-5 mx-5"
				>
					Click here
				</Button>
				<Modal
					show={this.state.show}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					onHide={() => this.handleModal()}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							<h5>Start New Preauth</h5>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h6>Search Patient Record</h6>
						<Forms />
					</Modal.Body>
					<Modal.Footer>
						<Button
							onClick={() => {
								this.handleModal();
							}}
						>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default popup;
