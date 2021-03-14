import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Forms from "./Forms";
import Axios from "axios";

class Popup extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			patient_data: [],
			value: "uid",
			placeholder: "Enter Patient UID",
			inputValue: "",
			showTable: false,
		};
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
		if (e.target.value === "uid") {
			this.setState({ placeholder: "Enter Patient UID" });
		} else if (e.target.value === "policy_number") {
			this.setState({
				placeholder: "Enter Last 5 Characters of Policy Number",
			});
		} else {
			this.setState({
				placeholder: "Enter Last 5 Characters of health card no.",
			});
		}
	};

	handleInputChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	handleModal() {
		this.setState({ show: !this.state.show });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ showTable: true });
		Axios.get(
			`http://www.bytelabsindia.com/api/patients/search?search_by=${this.state.value}&search_value=${this.state.inputValue}`,
			{
				headers: {
					Authorization: "UGFzc0Fhb0dhbGVTZUxhZ2Fv",
				},
			}
		)
			.then((res) => {
				this.setState({ patient_data: res.data.data });
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		return (
			<div>
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
						<Forms
							patient_data={this.state.patient_data}
							inputValue={this.state.inputValue}
							handleInputChange={this.handleInputChange.bind(this)}
							placeHolder={this.state.placeholder}
							value={this.state.value}
							handleChange={this.handleChange.bind(this)}
							showTable={this.state.showTable}
							handleSubmit={this.handleSubmit.bind(this)}
						/>
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

export default Popup;
