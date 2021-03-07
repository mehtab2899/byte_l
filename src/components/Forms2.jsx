import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const Forms2 = (props) => {
	const arr = props.company_name.data;
	const hos_result = props.hos_name.data;
	return (
		<div>
			<Form>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={3}>
						Create Preauth For
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							as="select"
							className="mr-sm-2"
							id="inlineFormCustomSelect"
							custom
						>
							{arr
								? arr.map((data) => (
										<option key={data.id}>{data.company_name}</option>
								  ))
								: null}
						</Form.Control>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formHorizontalPassword">
					<Form.Label column sm={3}>
						Select Hospital
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							as="select"
							className="mr-sm-2"
							id="inlineFormCustomSelect"
							custom
						>
							{hos_result
								? hos_result.map((data) => (
										<option key={data.id}>{data.name}</option>
								  ))
								: null}
						</Form.Control>
					</Col>
				</Form.Group>

				<Form.Group as={Row}>
					<Col className="text-center forms2-btn mt-5">
						<Button type="submit">Proceed &gt;&gt;</Button>
					</Col>
				</Form.Group>
			</Form>
		</div>
	);
};

export default Forms2;
