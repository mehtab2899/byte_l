import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Topbar from "./Topbar";

const Patient = () => {
	return (
		<>
			<div className="tops">
				<Topbar title={"Preauth #3256"} />
			</div>
			<div className="patient">
				<div className="patient_form1 ml-5">
					<Form>
						<Form.Group as={Row} controlId="formHorizontalEmail">
							<Form.Label column sm={4} className="text-right">
								MW Patient UID
							</Form.Label>
							<Col sm={3} className="mt-2">
								<span>SRK150219/03</span>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalEmail">
							<Form.Label column sm={4} className="text-right">
								MW Case No.
							</Form.Label>
							<Col sm={3} className="mt-2">
								<span>1001</span>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="exampleForm.SelectCustom">
							<Form.Label column sm={4} className="text-right">
								Title
							</Form.Label>
							<Col className="">
								<select className="col-4 p-2">
									<option>MR.</option>
									<option>Mrs.</option>
								</select>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalEmail">
							<Form.Label column sm={4} className="text-right">
								FirstName<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="email" placeholder="Sanjay" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Middle Name<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="text" placeholder="Rajaram" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Last Name<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="text" placeholder="Kale" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Gender<i>*</i>
							</Form.Label>

							<Col>
								{["radio"].map((type) => (
									<div key={`inline-${type}`}>
										<Form.Check
											inline
											label="Male"
											type={type}
											id={`inline-${type}-1`}
											className="col-1"
											name="gender"
										/>
										<Form.Check
											inline
											label="Female"
											type={type}
											id={`inline-${type}-2`}
											className="col-1"
											name="gender"
										/>
										<Form.Check
											inline
											label="Other"
											type={type}
											id={`inline-${type}-3`}
											className="col-1 ml-4"
											name="gender"
										/>
									</div>
								))}
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Age<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="text" placeholder="41" />
							</Col>
							<Col>
								<select className="col-3 p-2">
									<option value="Years">Years</option>
								</select>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Date of Birth
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="date" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Contact Number<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="number" placeholder="9199999999" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Contact Number of attending relative
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="number" placeholder="9199999999" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Insurance Company<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<select className="col-12 p-2">
									<option value="">Aditya Birla Insurance</option>
								</select>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								TPA<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<select className="col-12 p-2">
									<option value="">MD India</option>
								</select>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Insured Card ID Number<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="number" placeholder="123456789" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Policy Type<i>*</i>
							</Form.Label>
							<Col sm={3}>
								<select className="col-12 p-2">
									<option value="">MD India</option>
								</select>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Policy No./Name of Corporate
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="number" placeholder="123/2020/199" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Employee ID
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="text" placeholder="" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Currently do you have any other Mediclaim / Health insurance
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
						{/* </Form> */}
						<hr />
						{/* <Form> */}
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Company Name
							</Form.Label>
							<Col sm={5}>
								<Form.Control type="text" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Other insurance details
							</Form.Label>
							<Col sm={5}>
								<Form.Control type="text" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Do you have a family physician
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
						{/* </Form> */}
						<hr />
						{/* <Form> */}
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Name of the Family Physician
							</Form.Label>
							<Col sm={5}>
								<Form.Control type="text" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Contact Number, if any
							</Form.Label>
							<Col sm={3}>
								<Form.Control type="number" />
							</Col>
						</Form.Group>
						<Form.Group
							as={Row}
							controlId="formHorizontalPassword"
							className="mt-5"
						>
							<Form.Label column sm={4} className="text-right">
								Current Address of Insured Patient
							</Form.Label>
							<Col sm={5}>
								<Form.Control type="text" />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="formHorizontalPassword">
							<Form.Label column sm={4} className="text-right">
								Occupation of Insured Patient
							</Form.Label>
							<Col sm={5}>
								<Form.Control type="text" />
							</Col>
						</Form.Group>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Patient;
