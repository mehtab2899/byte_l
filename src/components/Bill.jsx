import React from "react";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Charges from "./Charges";

const Bill = () => {
	return (
		<React.Fragment>
			<div className="bill-container">
				<div className="bill-header">
					<h1>
						Room / ICU / Other
						<span>Room rent includes(Rent + Nursing charge + RMO Charges)</span>
					</h1>
					<h1>
						Sub Total: <a className="main-header-price">&#8377; 32,600 </a>
					</h1>
				</div>
				<Charges />
				<Charges />
				<div className="text-right  mr-3">
					<Button>+ Add Super Specialist Charges</Button>
				</div>

				<div className="super">
					<div className="super-one">
						<h5>Super Specialist Charges</h5>
						<h5>
							Total Cost: Rs. 2,000
							<i className="text-danger px-1">
								<FontAwesomeIcon icon={faTrashAlt} />
							</i>
						</h5>
					</div>
					<div className="m-4">
						<Table responsive="sm" bordered>
							<thead className="bill-head">
								<tr>
									<th>Sr. No.</th>
									<th>Date</th>
									<th>Code</th>
									<th>Particulars</th>
									<th>Rate</th>
									<th>No. Of Visits</th>
									<th>Amount</th>
									<th> </th>
								</tr>
							</thead>
							<tbody className="table-bill-body">
								<tr>
									<td>1</td>
									<td>11/10/2020</td>
									<td>501000</td>
									<td>Super specialist Charges</td>
									<td className="price">1000</td>
									<td>1</td>
									<td className="price">1000</td>
									<td></td>
								</tr>
								<tr>
									<td>2</td>
									<td>13/10/2020</td>
									<td>501000</td>
									<td>Super specialist Charges</td>
									<td className="price">1000</td>
									<td>1</td>
									<td className="price">1000</td>
									<td></td>
								</tr>
							</tbody>
						</Table>
						<div className="text-right  py-2">
							<Button>+ Add Super Specialist Charges</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="bill-container">
				<div className="bill-header">
					<h1>Package Charges</h1>
					<h1>
						Sub Total: <a className="main-header-price">&#8377; 11,600 </a>
					</h1>
				</div>
				<div className="m-4">
					<Table responsive="sm" bordered>
						<thead className="bill-head">
							<tr>
								<th>Sr. No.</th>
								<th>Date</th>
								<th>Code</th>
								<th>Package Name</th>
								<th>Room Type</th>
								<th>Amount</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="table-bill-body">
							<tr>
								<td>1</td>
								<td>11/10/2020</td>
								<td>1010040</td>
								<td>Angioplasty</td>
								<td>General Ward</td>
								<td className="price">66550</td>
								<td className="text-danger">
									<FontAwesomeIcon icon={faTrashAlt} />
								</td>
							</tr>
						</tbody>
					</Table>
					<div className="text-right  py-2">
						<Button>+ Add More Packages</Button>
					</div>
				</div>
			</div>

			<div className="bill-container">
				<div className="bill-header">
					<h1>Surgery Charges</h1>
					<h1>
						Sub Total: <a className="main-header-price">&#8377; 7,175 </a>
					</h1>
				</div>
				<div className="surgery">
					<h5>Surgery 1</h5>
					<h5>
						Total Cost: Rs. 7,175
						<FontAwesomeIcon className="text-danger" icon={faTrashAlt} />
					</h5>
				</div>

				<div className="surgery-charges">
					<div>
						<label>Surgery Name</label>
						<input
							className="surgery-input"
							type="text"
							placeholder="Surgery 1"
						/>
					</div>
					<div>
						<label>Surgery Category</label>
						<select>
							<option value="">Minor Surgeries</option>
						</select>
					</div>
					<div>
						<label>Room Type</label>
						<select>
							<option value="">General Ward</option>
						</select>
					</div>
					<div>
						<label>Professional fees Surgeon</label>
						<input type="number" placeholder="4100" />
					</div>
					<div>
						<label>OT Charges </label>
						<input type="number" placeholder="1025" />
						<input className="text-input" type="number" placeholder="25" />
						<span className="text-span">% of Professional fess</span>
					</div>
					<div>
						<label htmlFor="">Anesthetist Fees</label>
						<input type="number" placeholder="1230" />
						<input className="text-input" type="number" placeholder="30" />
						<span className="text-span">% of Professional fees</span>
					</div>

					<div>
						<label htmlFor="">Assistant Surgeon Charges</label>
						<input type="number" placeholder="820" />
						<input className="text-input" type="number" placeholder="20" />
						<span className="text-span">% of Professional fees</span>
					</div>
				</div>
				<div className="text-right  p-3">
					<Button>+ Add More Packages</Button>
				</div>
			</div>
			<hr />

			<div className="third-last">
				<div>
					<label htmlFor="">
						Expected cost of investigation + diagnostic<i>*</i>
					</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">
						Medicine + Consumables<i>*</i>
					</label>
					<input type="text" />
				</div>
			</div>

			<div className="second-last">
				<h6>Implant Charges (if applicable)</h6>
				<div className="second-last-one">
					<label htmlFor="">Implant charges 1</label>
					<input type="text" placeholder="Enter implant charges" />
				</div>
				<div className="text-right mt-2">
					<Button variant="light">+ Add more implant Charges</Button>
				</div>
			</div>
			<div className="fourth-last">
				<label htmlFor="">Other hospital expenses if any</label>
				<input type="text" />
			</div>
			<div className="bottom-div">
				<h4>Total Hospitalization Cost(Rs.)</h4>
				<h4 className="text-success ml-5">1,50,500.00</h4>
			</div>
		</React.Fragment>
	);
};

export default Bill;
