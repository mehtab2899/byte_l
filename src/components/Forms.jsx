import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button } from "react-bootstrap";
import Tables from "./Tables";

const Forms = ({
	patient_data,
	value,
	placeHolder,
	inputValue,
	handleInputChange,
	handleChange,
	handleSubmit,
	showTable,
}) => {
	console.log("forms main patient data dekhna hai", patient_data);
	// const [value, setValue] = useState("uid");
	// const [showTable, setShowTable] = useState(false);
	// const [placeholder, setPlaceholder] = useState("Enter Patient UID");

	// const [inputValue, setInputValue] = useState(null);

	// const handleInputChange = (e) => {
	// 	setInputValue(e.target.value);
	// };

	// const InputTypeSelector = useRef();
	// const [InputTypeSelectorr, setInputTypeselector] = useState("text");

	// const handleChange = (e) => {
	// 	setValue(e.target.value);
	// 	if (e.target.value === "uid") {
	// 		setPlaceholder("Enter Patient UID");
	// 		setInputTypeselector("text");
	// 	} else if (e.target.value === "policy_number") {
	// 		setPlaceholder("Enter Last 5 Characters of Policy Number");
	// 		setInputTypeselector("number");
	// 	} else {
	// 		setPlaceholder("Enter Last 5 Characters of health card no");
	// 		setInputTypeselector("number");
	// 	}
	// };

	// const handleSearch = (e) => {
	// 	e.preventDefault();

	// 	setShowTable(true);
	// };
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
							value={value}
							onChange={handleChange}
						>
							<option value="uid">Patient UID</option>
							<option value="policy_number">Policy No.</option>
							<option value="health_card_number">Health Card No.</option>
						</Form.Control>
					</Col>
					<Col xs="auto" className="my-1">
						<input
							type="text"
							className="form-control custom-input"
							id="customControlAutosizing"
							placeholder={placeHolder}
							value={inputValue}
							onChange={handleInputChange}
						/>
					</Col>
					<Col xs="auto" className="my-1">
						<Button type="submit" onClick={handleSubmit} disabled={!inputValue}>
							Search
						</Button>
					</Col>
				</Form.Row>
				{showTable && <Tables patient_data={patient_data} />}
			</Form>
		</div>
	);
};

export default Forms;
