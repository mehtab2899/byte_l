import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Menu = () => {
	return (
		<div>
			<Navbar bg="light" variant="light">
				<Nav className="mx-2">
					<NavLink className="px-2" to="/">
						Reply
					</NavLink>
					<NavLink className="px-2" to="/delivery">
						Delivery
					</NavLink>
					<NavLink className="px-2" to="/bill">
						Bill
					</NavLink>
					<NavLink className="px-2" to="/case">
						Case
					</NavLink>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Menu;
