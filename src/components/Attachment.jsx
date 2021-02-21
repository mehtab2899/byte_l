import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Attachment = (props) => {
	return (
		<React.Fragment>
			<h4>Additional Attachments</h4>
			<div className="first-attachment">
				<select name="" id="">
					<option value="select document type">Select Document Type</option>
					<option value="type1">type1</option>
					<option value="type2">type2</option>
					<option value="type3">type3</option>
				</select>
				<input type="file" />
				<Button variant="success">Browse Library</Button>
				<Button>Upload</Button>
			</div>
			<div className="doc">
				<h5>Document Type</h5>
				<h5>Document</h5>
				<h5>Actions</h5>
			</div>
			<hr />
			<div className="doc">
				<p>Patient Health Card/Policy Details</p>
				<a className="doc-anchor1" href="" download>
					<FontAwesomeIcon className="text-danger mx-2" icon={faFilePdf} />
					Patient_Health_Card_Policy_2101.pdf
				</a>
				<a href="/view" className="text-capitalize">
					view
					<i className="px-2">
						<FontAwesomeIcon className="text-danger" icon={faTrashAlt} />
					</i>
				</a>
			</div>
			<div className="doc">
				<p> Miscellaneous</p>
				<a className="doc-anchor2" href="" download>
					<FontAwesomeIcon className="text-danger mx-2" icon={faFilePdf} />
					Miscellaneous_2102.pdf
				</a>
				<a href="/view" className="text-capitalize">
					view
					<i className="px-2">
						<FontAwesomeIcon className="text-danger" icon={faTrashAlt} />
					</i>
				</a>
			</div>
			<div className="doc">
				<p>
					Investigation.Diagnostic Reports <br /> (Prescription, Bill and Report
					- Original) <br />
					<span className="ctscan">
						<i>Report Name: CT Scan</i>
					</span>
				</p>
				<a className="doc-anchor3" href="" download>
					<FontAwesomeIcon className="text-danger mx-2" icon={faFilePdf} />
					Investigation_ctscan.pdf
				</a>
				<a href="/view" className="text-capitalize">
					view
					<i className="px-2">
						<FontAwesomeIcon className="text-danger" icon={faTrashAlt} />
					</i>
				</a>
			</div>
			<hr />
			<Button className="mb-5 mx-4">{props.button} </Button>
			<Button className="mb-5 px-4" variant="light">
				Back
			</Button>
		</React.Fragment>
	);
};

export default Attachment;
