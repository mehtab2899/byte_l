import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./New.css";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<React.Fragment>
			<Sidebar />
		</React.Fragment>
	);
};

export default App;
