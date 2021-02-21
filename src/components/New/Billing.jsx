import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Bill from "../Bill";
import Topbar from "./Topbar";

const Billing = () => {
	return (
		<>
			<div className="tops">
				<Topbar title={"Create Pre-Auth"} />
			</div>
			<div className="Billing">
				<Form>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Date of admission<i>*</i>
						</Form.Label>
						<Col sm={3}>
							<Form.Control type="date" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Time of admission<i>*</i>
						</Form.Label>
						<Col sm={3}>
							<Form.Control type="time" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Emergency/planned hospitalization
						</Form.Label>
						<Col sm={3}>
							<select className="col-12 p-2">
								<option value="">Select Option</option>
							</select>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Expected staty in hospital<i>*</i>
						</Form.Label>
						<Col sm={3}>
							<Form.Control type="text" />
						</Col>
						<Col>
							<span>Days</span>
						</Col>
					</Form.Group>
				</Form>
				<hr />
				<Bill />
			</div>
		</>
	);
};

export default Billing;
