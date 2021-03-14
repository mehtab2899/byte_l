import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Popup1 from "./Popup1";

const Tables = ({ patient_data, modelClosePopupFunction, popupCloseState }) => {
	const pt_datas = patient_data;

	const [show, setShow] = useState(false);

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
					{pt_datas &&
						pt_datas.map((data) => {
							return (
								<React.Fragment>
									<tr>
										<td>
											<input type="radio" name="foo" />
										</td>
										<td>{data.mw_patient_id}</td>
										<td>{data.fname + " " + data.lname}</td>
										<td>{data.isurance_id_card_number}</td>
										<td>{data.policy_number}</td>
									</tr>
								</React.Fragment>
							);
						})}
				</tbody>
			</Table>
			<div className="text-right mt-4 mb-5">
				<Button onClick={modelClosePopupFunction}>
					Select Patient & Proceed &gt;&gt;
				</Button>
			</div>
			<Popup1 show={popupCloseState} onClick={handlePopClose} />
		</div>
	);
};

export default Tables;
