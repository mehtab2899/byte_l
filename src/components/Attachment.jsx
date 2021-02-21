import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Attachment = (props) => {
	return (
		<React.Fragment>
			<h6 className="mt-5">Additional Attachments</h6>
			<div className="first-attachment p-1">
				<select>
					<option value="select document type">Select Document Type</option>
					<option value="type1">type1</option>
				</select>
				<input type="file" />
				<Button variant="success">Browse Library</Button>
				<Button>Upload</Button>
			</div>
			<div className="doc mt-5">
				<h5>Document Type</h5>
				<h5>Document</h5>
				<h5>Actions</h5>
			</div>
			<hr />
			<div className="doc">
				<p>Patient Health Card/Policy Details</p>
				<a className="doc-anchor1" href="#" download>
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
				<a className="doc-anchor2" href="#" download>
					<FontAwesomeIcon className="text-danger mx-1" icon={faFilePdf} />
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
						<i className="text-secondary">Report Name: CT Scan</i>
					</span>
				</p>
				<a className="doc-anchor3" href="#" download>
					<FontAwesomeIcon className="text-danger ml-4" icon={faFilePdf} />
					Investigation_ctscan_2103.pdf
				</a>
				<a href="/view" className="text-capitalize">
					view
					<i className="px-2">
						<FontAwesomeIcon className="text-danger" icon={faTrashAlt} />
					</i>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Attachment;
