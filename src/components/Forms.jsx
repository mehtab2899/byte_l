import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const Forms = () => {
	return (
		<div>
			<Form>
				<Form.Row className="align-items-center">
					<Col xs="auto" className="my-1">
						<Form.Label
							className="mr-sm-2"
							htmlFor="inlineFormCustomSelect"
							srOnly
						>
							Preference
						</Form.Label>
						<Form.Control
							as="select"
							className="mr-sm-4"
							id="inlineFormCustomSelect"
							custom
						>
							<option value="1">Patient UID</option>
							<option value="2">Policy No.</option>
							<option value="3">Health Card No.</option>
						</Form.Control>
					</Col>
					<Col xs="auto" className="my-1">
						<Form.Check type="text" id="customControlAutosizing" />
					</Col>
					<Col xs="auto" className="my-1">
						<Button type="submit">Submit</Button>
					</Col>
				</Form.Row>
			</Form>
		</div>
	);
};

export default Forms;
