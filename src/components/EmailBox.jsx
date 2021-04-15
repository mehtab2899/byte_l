import React from "react";
import EM from "./EM";
import EmailHeader from "./EmailHeader";

const EmailBox = () => {
	return (
		<div className="container">
			<EmailHeader />
			<hr />
			<EM />
		</div>
	);
};

export default EmailBox;
