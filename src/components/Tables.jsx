import React from "react";
import { Button, Table } from "react-bootstrap";

const Tables = () => {
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
						<td>SRK230</td>
						<td>501000</td>
						<td>Super specialist Charges</td>
						<td>dlkease</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="foo" />
						</td>
						<td>SRK230</td>
						<td>501000</td>
						<td>Super specialist Charges</td>
						<td>dlkease</td>
					</tr>
				</tbody>
			</Table>
			<div className="text-right mt-4 mb-5">
				<Button>Select Patient & Proceed</Button>
			</div>
		</div>
	);
};

export default Tables;
