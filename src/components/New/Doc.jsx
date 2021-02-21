import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import Docs1 from "./Docs1";
import Docs2 from "./Docs2";
import Attachment from "../Attachment";
import Topbar from "./Topbar";

const Doc = () => {
	return (
		<>
			<div className="tops">
				<Topbar title={"Create Pre-Auth"} />
			</div>
			<div>
				<h5>Documents</h5>
				<Docs1
					title={"Patient Health Card/Policy Details"}
					heading={"Patient Health Card or Policy Details"}
				/>
				<Docs1
					title={"Patient ID Proof/KYC detials"}
					heading={"Patient ID Proof or KYC details "}
				/>
				<Docs2 title={"Doctor notes/investigation reports"} />
				<Docs2 title={"Doctor notes/investigation reports"} />
				<Attachment />
				<h6 className="mt-5">Upload patient/relative sign</h6>
				<hr />
				<div className="doc_div1">
					<div className="doc_div2">
						<span>Upload patient/relative sign</span>
						<Col sm={4}>
							<Form.File id="custom-file" label="Custom file input" custom />
						</Col>
						<span className="doc_div2-span">
							Please select images only (.jpg, png, jpeg, bmp)
						</span>
						<Button variant="success">Upload Signature</Button>
					</div>
					<Button variant="link" className="ml-5 text-danger">
						Delete Sign
					</Button>
				</div>
			</div>
		</>
	);
};

export default Doc;
