import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Doctor3 = (props) => {
	return (
		<div>
			<Form.Group as={Row} controlId="formHorizontalPassword">
				<Form.Label column sm={4} className="text-right">
					{props.label}
				</Form.Label>
				<Col className="mt-2">
					{["radio"].map((type) => (
						<div key={`inline-${type}`}>
							<Form.Check
								inline
								label="Yes"
								type={type}
								id={`inline-${type}-1`}
								className="col-1"
								name="insured"
							/>
							<Form.Check
								inline
								label="No"
								type={type}
								id={`inline-${type}-2`}
								className="col-1"
								name="insured"
							/>
						</div>
					))}
				</Col>
			</Form.Group>
		</div>
	);
};

export default Doctor3;
