import React from "react";
import EmailBox from "./EmailBox";
import Navbar from "./Navbar";

const EmailInbox = () => {
	return (
		<div>
			<h3>Email Inbox</h3>
			<Navbar />
			<EmailBox />
		</div>
	);
};

export default EmailInbox;
