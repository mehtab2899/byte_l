import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Topbar from "./Topbar";
import Doctor1 from "./Doctor1";
import Doctor2 from "./Doctor2";
import Doctor3 from "./Doctor3";

const Doctor = () => {
	return (
		<>
			<div className="tops">
				<Topbar title={"Create Pre-Auth"} />
			</div>
			<div>
				<h6>Doctor Details</h6>
				<Form>
					<Form.Group as={Row} controlId="exampleForm.SelectCustom">
						<Form.Label column sm={4} className="text-right">
							Select Name of the treating Doctor <i>*</i>
						</Form.Label>
						<Col className="">
							<select className="col-4 p-2">
								<option>Dr. Abhishek</option>
								<option>Dr. XYZ</option>
							</select>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Qualification
						</Form.Label>
						<Col sm={3}>
							<Form.Control type="text" placeholder="MBBS MD Medicine" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Registration number with State code
						</Form.Label>
						<Col sm={3}>
							<Form.Control type="text" placeholder="A12XYZ" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={4} className="text-right">
							Contact Number
						</Form.Label>
						<Col sm={3}>
							<Form.Control type="number" placeholder="912345678" />
						</Col>
					</Form.Group>
				</Form>
				<hr />

				<h6>Dignosis / Past History</h6>
				<Doctor1
					label={"Nature of illness/Disease with presenting complaints"}
					icon={"*"}
				/>

				<Doctor1 label={"Relavant Critical Findings"} icon={" "} />

				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						Duration of present ailment
					</Form.Label>
					<Col sm={2}>
						<Form.Control type="text" />
					</Col>
					<Col>
						<span>Days</span>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						Date of First consultation
					</Form.Label>
					<Col sm={3}>
						<Form.Control type="date" />
					</Col>
				</Form.Group>

				<Doctor1 label={"Past history of present ailment, if any"} icon={" "} />

				<Doctor1 label={"Provisional diagnosis"} icon={"*"} />

				<Doctor1 label={"ICD 10 Code"} icon={" "} />
				<hr />

				<h6>Treatment Details</h6>

				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						Proposed line of treatment<i>*</i>
					</Form.Label>
					<Col className="mt-2">
						{["checkbox"].map((type) => (
							<div key={`custom-${type}`} className="mb-3">
								<Form.Check
									custom
									type={type}
									id={`custom-${type}`}
									label={`Medical Management`}
								/>
								<Form.Check
									custom
									type={type}
									id={`custom-${type}`}
									label={`Surgical Management`}
								/>
								<Form.Check
									custom
									type={type}
									id={`custom-${type}`}
									label={`Intensive Care`}
								/>
								<Form.Check
									custom
									type={type}
									id={`custom-${type}`}
									label={`Investigation `}
								/>
								<Form.Check
									custom
									type={type}
									id={`custom-${type}`}
									label={`Non-allopathic treatment`}
								/>
							</div>
						))}
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						If investigation and, /or Medical Management, Provide
					</Form.Label>
					<Col sm={6}>
						<Form.Control type="text" />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						Route of Drug Administration
					</Form.Label>
					<Col sm={3}>
						<Form.Control type="text" placeholder="IV Fluid & Injections" />
					</Col>
				</Form.Group>
				<Doctor2 label={"Name of Surgery"} />
				<Doctor2 label={"ICD 10 PCS code"} />
				<Doctor2 label={"If other treatment, provide details"} />

				<h6 className="custom-h6">In case of accident</h6>

				<Doctor2 label={"How did injury occur"} />
				<Doctor3 label={"Is it RTA"} />
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						Date of injury
					</Form.Label>
					<Col sm={3}>
						<Form.Control type="date" />
					</Col>
				</Form.Group>
				<Doctor3 label={"Report to Police"} />
				<Doctor2 label={"FIR No."} />
				<Doctor3
					label={
						"Injury/Disease caused due to substace abuse/alcohol cunsumption"
					}
				/>
				<Doctor3 label={"Test conducted to establish this"} />
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right">
						Attach Report
					</Form.Label>
					<Col sm={4}>
						<Form.File id="custom-file" label="Custom file input" custom />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right mt-3">
						In case of Maternity
					</Form.Label>
					<Col sm={1}>
						<span className="mx-4">G</span>
						<Form.Control type="text" />
					</Col>
					<Col sm={1}>
						<span className="mx-4">L</span>
						<Form.Control type="text" />
					</Col>
					<Col sm={1}>
						<span className="mx-4">P</span>

						<Form.Control type="text" />
					</Col>
					<Col sm={1}>
						<span className="mx-4">A</span>
						<Form.Control type="text" />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Form.Label column sm={4} className="text-right mb-5">
						Expected date of Delivery
					</Form.Label>
					<Col sm={3}>
						<Form.Control type="date" />
					</Col>
				</Form.Group>
			</div>
		</>
	);
};

export default Doctor;
