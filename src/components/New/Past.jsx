import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Topbar from "./Topbar";
import Past1 from "./Past1";

const Past = () => {
	return (
		<>
			<div className="tops">
				<Topbar title={"Create Pre-Auth"} />
			</div>
			<Past1 label={"Diabetes"} />
			<Past1 label={"Heart Disease"} />
			<Past1 label={"Hypertension"} />
			<Past1 label={"Hyperlipidemias"} />
			<Past1 label={"Osteoarthriti"} />
			<Past1 label={"Asthma/COPD/Bronchitis"} />
			<Past1 label={"Cancer"} />
			<Past1 label={"Alcohol/Drug abuse"} />

			<Form.Group as={Row} controlId="formHorizontalPassword">
				<Form.Label column sm={4} className="text-right">
					Any other ailment, give details
				</Form.Label>
				<Col sm={5} className="ml-1">
					<Form.Control as="textarea" />
				</Col>
			</Form.Group>
		</>
	);
};

export default Past;
