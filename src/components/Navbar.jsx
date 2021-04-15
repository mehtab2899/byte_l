import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
	return (
		<div>
			<Nav variant="pills" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/cashless">Cashless Emails</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/empanelment">Empanelment Emails</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/unidentified">Unidentified</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
};

export default Navbar;
