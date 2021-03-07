import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Popup1 from "./Popup1";

const Tables = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handlePopClose = () => {
		setShow(false);
	};

	return (
		<div>
			<Table responsive="sm" bordered className="mt-5 mb-3">
				<thead className="bill-head">
					<tr>
						<th></th>
						<th>Medworld Patient ID</th>
						<th>Patient Name</th>
						<th>Health Card Number</th>
						<th>Policy Number</th>
					</tr>
				</thead>
				<tbody className="table-bill-body">
					<tr>
						<td>
							<input type="radio" name="foo" />
						</td>
						<td>SRK230279/01</td>
						<td>Sanjay Rajaram Kale</td>
						<td>123456789</td>
						<td>123/2020/199</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="foo" />
						</td>
						<td>RUP021211/02</td>
						<td>Ravi Uttamrao Patil</td>
						<td>45678912359</td>
						<td>456/1920/199</td>
					</tr>
				</tbody>
			</Table>
			<div className="text-right mt-4 mb-5">
				<Button onClick={handleShow}>Select Patient & Proceed &gt;&gt;</Button>
			</div>
			<Popup1 show={show} onClick={handlePopClose} />
		</div>
	);
};

export default Tables;
