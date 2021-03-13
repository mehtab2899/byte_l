import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Popup1 from "./Popup1";

const Tables = (props) => {
	const pt_datas = props.patient_datas;

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
						<td>{pt_datas[0].mw_patient_id}</td>
						<td>{pt_datas[0].fname + " " + pt_datas[0].lname}</td>
						<td>{pt_datas[0].isurance_id_card_number}</td>
						<td>{pt_datas[0].policy_number}</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="foo" />
						</td>
						<td>{pt_datas[1].mw_patient_id}</td>
						<td>
							{pt_datas[1].fname +
								" " +
								pt_datas[1].mname +
								" " +
								pt_datas[1].lname}
						</td>
						<td>{pt_datas[1].isurance_id_card_number}</td>
						<td>{pt_datas[1].policy_number}</td>
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
