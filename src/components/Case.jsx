import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserMd,
	faUser,
	faCreditCard,
	faEnvelopeOpenText,
	faShare,
	faReply,
	faBuilding,
	faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const Case = () => {
	return (
		<React.Fragment>
			<div className="top-links">
				<a href="">Cashless Dashboard</a>/<a href="">MW Case 001</a>/ Case
				Details
				<div className="float-right">
					<Button variant="success" className="mx-2">
						Print Case Details
					</Button>
					<Button variant="light" className="px-5">
						Back
					</Button>
				</div>
			</div>

			<div className="case-details">
				<h4>Case Details #1001</h4>
				<div className="case-first  pb-0">
					<h5>
						<FontAwesomeIcon className="mx-2" icon={faUser} />
						Patient Details
					</h5>
					<a href="">View Pre-Auth Info</a>
				</div>
				<hr />
				<div>
					<Row>
						<Col className="pl-5">
							<div>
								<label>MW Patient UID</label>
								<span>SRK 150219/03</span>
							</div>
							<div>
								<label>CCN/AL No</label>
								<span>YJSKD-898556</span>
							</div>
							<div>
								<label>Insurance Company</label>
								<span>Aditya Birla HIC Ltd</span>
							</div>
							<div>
								<label>TPA</label>
								<span>N/A</span>
							</div>
						</Col>
						<Col>
							<div>
								<label>Patient Name</label>
								<span>Mr. Taarak mehata</span>
							</div>
							<div>
								<label>Gender</label>
								<span>Male</span>
							</div>
							<div>
								<label>Policy No.</label>
								<span>0019123456789</span>
							</div>
							<div>
								<label>Health Card No</label>
								<span>A12XYZ-2594699</span>
							</div>
						</Col>
					</Row>
				</div>
				<div className="case-first pt-5">
					<h5>
						<FontAwesomeIcon className="mx-2" icon={faUserMd} />
						Doctor & Treatment
					</h5>
					<a href="">View Pre-Auth Info</a>
				</div>
				<hr />
				<div>
					<Row>
						<Col className="case-divs pl-5">
							<div>
								<label>Select Name of the treating Doctor</label>
								<span>Dr. Abhishek</span>
							</div>
							<div>
								<label>Qualification</label>
								<span>MBBS MD</span>
							</div>
							<div>
								<label>Proposed line of treatment</label>
								<span>Medical Management </span>
								<br />
								<span className="surgical-span">Surgical Management</span>
							</div>
						</Col>
						<Col>
							<div>
								<label>Patient Name</label>
								<span>Mr. Taarak mehata</span>
							</div>
							<div>
								<label>Gender</label>
								<span>Male</span>
							</div>
							<div>
								<label>Policy No.</label>
								<span>0019123456789</span>
							</div>
							<div>
								<label>Health Card No</label>
								<span>A12XYZ-2594699</span>
							</div>
						</Col>
					</Row>
				</div>
				<div>
					<div className="case-first pt-5">
						<h5>
							<FontAwesomeIcon className="mx-2" icon={faCreditCard} />
							Billing & Payment
						</h5>
						<a href="">View Pre-Auth Info</a>
					</div>
					<hr />
					<Row>
						<Col className="custom-col">
							<div>
								<label>Total Bill Amount</label>
								<span className=" pr-5 ">&#8377; 1,40,000</span>
								<a href="" className="custom-case-a">
									View Bill
								</a>
							</div>
							<div>
								<label>Approved Amount</label>
								<span className="pr-5">&#8377; 1,00,000</span>
								<a href="" className="custom-case-a">
									View Payment Description
								</a>
							</div>
						</Col>
					</Row>
				</div>

				<div className="case-first pt-5">
					<h5>
						<FontAwesomeIcon className="mx-2" icon={faCreditCard} />
						Reciepts
					</h5>
				</div>
				<hr />
				<div>
					<Table responsive="sm" bordered>
						<thead className="table-head">
							<tr>
								<th>Reciept No</th>
								<th>Payment in favor of</th>
								<th>Paid Through</th>
								<th>Cheque/Transcation No.</th>
								<th>Amount</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>R/91/1059</td>
								<td>Advance</td>
								<td>online</td>
								<td>TXN411021ABC</td>
								<td>&#8377; 25,000</td>
								<td>
									<a href="" className="px-3">
										Print
									</a>
									<a href="" className="text-danger">
										Cancel
									</a>
								</td>
							</tr>
							<tr>
								<td>R/91/1072</td>
								<td>Deduction in Approval</td>
								<td>online</td>
								<td>TXN411021ABC</td>
								<td>&#8377; 15,000</td>
								<td>
									<a href="" className="px-3">
										Print
									</a>
									<a href="" className="text-danger">
										Cancel
									</a>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<div className="case-first pt-5">
					<h5 className="case-heading">
						<FontAwesomeIcon className="mx-2" icon={faEnvelopeOpenText} />
						Case Activities
					</h5>
				</div>
				<hr />
				<div className="case-activity-one">
					<p>
						<span className="case-icons">
							<FontAwesomeIcon className="mx-2" icon={faReply} />
						</span>

						<FontAwesomeIcon className="ml-5" icon={faBuilding} />
						<span className="span-cases">
							Bajaj Cashless Dept. approved pre-auth
						</span>
					</p>
					<p className="custom-case-p">5 minutes ago</p>
				</div>
				<hr />
				<div className="case-activity-one">
					<p>
						<span className="case-icons">
							<FontAwesomeIcon className="mx-2" icon={faShare} />
						</span>
						<FontAwesomeIcon className="ml-5" icon={faUser} />
						<span className="span-cases"> Suresh M </span>replied to
						<span> Query</span> over email
					</p>
					<p className="custom-case-p">23 hours ago</p>
					<a href="">
						<FontAwesomeIcon className="text-danger mr-2" icon={faFilePdf} />
						Query Letter
					</a>
					<br />
					<a href="">
						<FontAwesomeIcon className="text-danger mr-2" icon={faFilePdf} />
						Query Reply Letter
					</a>
				</div>
				<hr />
				<div className="case-activity-one">
					<p>
						<span className="case-icons">
							<FontAwesomeIcon className="mx-2" icon={faReply} />
						</span>
						<span className="span-cases"> Bajaj Cashless Dept</span> raised
						<span> Query</span> in case
					</p>
					<p className="custom-case-p">on 06/10/2020 11:10 am </p>
					<a href="">
						<FontAwesomeIcon className="text-danger mr-2" icon={faFilePdf} />
						Query Letter
					</a>
				</div>
				<hr />
				<div className="case-activity-one">
					<p>
						<span className="case-icons">
							<FontAwesomeIcon className="mx-2" icon={faShare} />
						</span>
						<FontAwesomeIcon className="ml-5" icon={faUser} />
						<span className="span-cases">Ramesh N.</span> sent
						<span> Pre-auth request</span> over email
					</p>
					<p className="custom-case-p">on 05/10/2020 05:02 pm</p>
					<a href="">
						<FontAwesomeIcon className="text-danger mr-2" icon={faFilePdf} />
						Pre-auth form
					</a>
					<br />
					<a href="">
						<FontAwesomeIcon className="text-danger mr-2" icon={faFilePdf} />
						Patient KYC(Adhar Card)
					</a>
					<br />

					<a href="">
						<FontAwesomeIcon className="text-danger mr-2" icon={faFilePdf} />
						Patient Health Card Details
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Case;
