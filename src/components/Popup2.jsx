import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class Popup2 extends Component {
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
						<h6>Select Company & Hospital</h6>
					</Modal.Body>
					<Modal.Footer className="text-center">
						<Button
							onClick={() => {
								this.handleModal();
							}}
						>
							Proceed &gt;&gt;
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Popup2;
