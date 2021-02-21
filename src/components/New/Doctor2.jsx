import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Doctor2 = (props) => {
	return (
		<div>
			<Form.Group as={Row} controlId="formHorizontalEmail">
				<Form.Label column sm={4} className="text-right">
					{props.label}
				</Form.Label>
				<Col sm={3}>
					<Form.Control type="text" />
				</Col>
			</Form.Group>
		</div>
	);
};

export default Doctor2;
