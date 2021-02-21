import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

const Charges = () => {
	return (
		<div>
			<div className="bill-first">
				<div className="first">
					<h5>
						Room & Consulation
						<span>
							Room Type
							<select name="" id="">
								<option value="">General Ward</option>
								<option value="">General Ward</option>
							</select>
						</span>
					</h5>
					<h5 className="cost">
						Total Cost: Rs. 15,300
						<i className="text-danger px-1">
							<FontAwesomeIcon icon={faTrashAlt} />
						</i>
					</h5>
				</div>
				<Row>
					<Col>
						<div className="second">
							<label htmlFor="">Room Rent(Per Day)</label>
							<input type="text" placeholder="1500" />
							<FontAwesomeIcon className="times" icon={faTimes} />
							<label htmlFor="">Room Stay(in Days)</label>
							<input type="text" placeholder="6" />
							<p>9000</p>
						</div>
					</Col>
					<Col>
						<div className="second">
							<label htmlFor="">Consulation Charges</label>
							<input type="text" placeholder="1500" />
							<FontAwesomeIcon className="times" icon={faTimes} />
							<label htmlFor="">No. Of visits</label>
							<input type="text" placeholder="7" />
							<p>6300</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Charges;
