import React from "react";
import { Button } from "react-bootstrap";

const Topbar = (props) => {
	return (
		<>
			<div className="topbar_div1">
				<span className="font-weight-bold">{props.title}</span>
				<div className="topbar_div4">
					<Button variant="success">Send Pre-Auth</Button>
					<Button variant="primary" className="mx-4">
						Save
					</Button>
					<Button variant="light" className="mr-4">
						Preview Pre-Auth
					</Button>
					<Button variant="light" className="mr-5">
						Back
					</Button>
				</div>
			</div>
		</>
	);
};

export default Topbar;
