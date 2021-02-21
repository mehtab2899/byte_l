import React from "react";
import { Form, Button } from "react-bootstrap";
import Email from "./Email";
import Attachment from "./Attachment";
import Details from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Delivery = () => {
	return (
		<React.Fragment>
			<Details />
			<hr />
			<div className="slip">
				<h4>Delivery & POD Slip Details</h4>
				<Form className="p-2">
					<Form.Group>
						<label>POD Slip No.</label>
						<input type="number" placeholder="Enter POD Slip No." />
					</Form.Group>
					<Form.Group>
						<label>File Dispatch Date</label>
						<input type="date" placeholder="dd/mm/yy" />
					</Form.Group>
					<Form.Group>
						<label>File Delivery Date</label>
						<input type="date" placeholder="dd/mm/yy" />
					</Form.Group>
					<Form.Group className="POD">
						<label>POD Slip Copy</label>
						<input type="file" />
						<FontAwesomeIcon className="text-danger ml-5" icon={faFilePdf} />
						<a href="" className="mx-2" download>
							POD_slip 1.pdf
						</a>
						<FontAwesomeIcon
							className="text-danger mr-5 float-right"
							icon={faTrashAlt}
						/>
					</Form.Group>
					<Form.Group className="POD">
						<label>Delivery Screenshot</label>
						<input type="file" />
						<FontAwesomeIcon className="text-danger ml-5" icon={faFilePdf} />
						<a href="" className="mx-2" download>
							Delivery Screenshot1.pdf
						</a>
						<FontAwesomeIcon
							className="text-danger mr-5 float-right"
							icon={faTrashAlt}
						/>
					</Form.Group>
					<Form.Group>
						<label>Receiving Person Name</label>
						<input type="text" placeholder="Enter Reciever Name" />
					</Form.Group>
					<Form.Group>
						<label>Employee ID</label>
						<input type="text" placeholder="Enter Employee ID" />
					</Form.Group>
					<div className="text-right">
						<Button variant="light">Save</Button>
					</div>
				</Form>
			</div>
			<div className="mx-3">
				<Email />
				<Attachment button={"Email Delivery Details"} />
			</div>
		</React.Fragment>
	);
};

export default Delivery;
