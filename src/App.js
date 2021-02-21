import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bill from "./components/Bill";
import Case from "./components/Case";
import Delivery from "./components/Delivery";
import Reply from "./components/Reply";
import Menu from "./components/Menu";

const App = () => {
	return (
		<React.Fragment>
			<Menu />
			<Switch>
				<Route exact path="/" component={Reply} />
				<Route exact path="/delivery" component={Delivery} />
				<Route exact path="/bill" component={Bill} />
				<Route exact path="/case" component={Case} />
				<Route component={Error} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
