import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Doctor1 = (props) => {
	return (
		<div>
			<Form.Group as={Row} controlId="formHorizontalEmail">
				<Form.Label column sm={4} className="text-right">
					{props.label}
					<i>{props.icon}</i>
				</Form.Label>
				<Col sm={5}>
					<Form.Control type="text" />
				</Col>
			</Form.Group>
		</div>
	);
};

export default Doctor1;
