import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Attachment from "./Attachment";
import Email from "./Email";

const Reply = () => {
	return (
		<React.Fragment>
			<div className="reply">
				<div className="pl-2 top-links">
					<a href="">Cashless Dashboard</a>/ <a href="">MW Case 001</a> / Reply
					Denial
				</div>
				<div className="reply">
					<h4>Reply Denial Letter</h4>
					<h5>Patient Details</h5>
					<hr />
					<Form className="pl-5 text-left">
						<Form.Group>
							<label>Patient Name</label>
							<input plaintext defaultValue="Mr. Taarak Mehta" />
						</Form.Group>
						<Form.Group>
							<label>Policy No.</label>
							<input type="number" defaultValue="18949828995" />
						</Form.Group>
						<Form.Group>
							<label>Health Card No.</label>
							<input plaintext defaultValue="A12XYZ-2594699" />
						</Form.Group>
						<Form.Group>
							<label>CCN / AL No.</label>
							<input type="number" />
						</Form.Group>
					</Form>
					<Form.Group controlId="formBasicCheckbox">
						<input className="checkbox" type="checkbox" />
						<span>Upload Denial Reply Letter Manually</span>
					</Form.Group>
					<h5>Denial Reply & Remark</h5>
					<hr />
					<h6>Denial Reply</h6>
					<input className="dr" type="text" placeholder="Denial Reply" />
					<h6>Remark</h6>
					<input
						className="dre"
						type="text"
						placeholder="Please consider and do the needful"
					/>
					<Button variant="success" className="float-right">
						Print Reply Denial Letter
					</Button>
				</div>
				<br />
				<Email />
				<Attachment button={"Send Reply Email"} />
			</div>
		</React.Fragment>
	);
};

export default Reply;
