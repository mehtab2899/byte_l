import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmailInbox from "./components/EmailInbox";

const App = () => {
	return (
		<React.Fragment>
			<EmailInbox />
		</React.Fragment>
	);
};

export default App;
