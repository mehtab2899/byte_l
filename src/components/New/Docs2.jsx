import React from "react";
import { Button } from "react-bootstrap";

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
				<span className="ml-4">
					No documents uploaded yet
					<a href="#" className="ml-2">
						Click Here to Upload Files
					</a>
				</span>
			</div>
		</div>
	);
};

export default Docs1;
