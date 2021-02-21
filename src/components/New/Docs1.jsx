import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage } from "@fortawesome/free-solid-svg-icons";

const Docs1 = (props) => {
	return (
		<div className="ml-3">
			<div className="document_div1 mb-2">
				<h6>{props.title}</h6>
				<Button variant="light" className="mr-3">
					+ Add Documents
				</Button>
			</div>
			<hr />
			<div className="document_div2">
				<span className="text-danger">
					<FontAwesomeIcon icon={faFilePdf} />
				</span>
				<span className="ml-1 mr-5">{props.heading}1</span>
				<a href="/view">View</a>
				<Button variant="link" className="text-danger">
					Delete
				</Button>
			</div>
			<div className="document_div3">
				<span>
					<FontAwesomeIcon icon={faImage} />
				</span>
				<span className="ml-1 mr-5">{props.heading}2</span>
				<a href="/view">View</a>
				<Button variant="link" className="text-danger">
					Delete
				</Button>
			</div>
		</div>
	);
};

export default Docs1;
