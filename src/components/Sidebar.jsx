import React from "react";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import Doctor from "./New/Doctor";
import Patient from "./New/Patient";
import Past from "./New/Past";
import Hospital from "./New/Hospital";
import Doc from "./New/Doc";
import Billing from "./New/Billing";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<hr />
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={2} className="border-right bg-light">
						<Nav sm={3} variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link className="mr-1" eventKey="first">
									Patient & Policy
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Hospital Details</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="third">Doctor & Treatment</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fourth"> Billing & Admission</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fifth">Past History</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="sixth">Documents</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={10}>
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<Patient />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<Hospital />
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<Doctor />
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<Billing />
							</Tab.Pane>
							<Tab.Pane eventKey="fifth">
								<Past />
							</Tab.Pane>
							<Tab.Pane eventKey="sixth">
								<Doc />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default Sidebar;
