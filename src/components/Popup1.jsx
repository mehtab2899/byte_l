import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Forms from "./Forms";
import Tables from "./Tables";

class Popup1 extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}

	handleModal() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<div>
				<Button>get data</Button>
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
						<Tables />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Popup1;
