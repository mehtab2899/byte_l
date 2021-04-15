import React from "react";
import { Nav, Badge } from "react-bootstrap";

const EmailBody = (props) => {
	return (
		<Nav.Link href="/home" className="email-nav">
			<div className="email-body mb-2">
				<h6>{props.img}</h6>
				<h6>{props.title}</h6>
				<Badge pill variant="info" className="p-1">
					{props.img1}
				</Badge>
				<span>{props.title1}</span>
			</div>
		</Nav.Link>
	);
};

export default EmailBody;
