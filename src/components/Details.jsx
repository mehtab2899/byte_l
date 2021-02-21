import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

const Details = () => {
	return (
		<div className="p-0 m-0">
			<h4 className="pl-3 pt-2">Update Delivery Details - MW Case #1001 </h4>
			<Row>
				<Col>
					<div className="delivery_div">
						<div>
							<label htmlFor="">Hospital Name</label>
							<span>Walunj Childrens Hospitals</span>
						</div>
						<div>
							<label htmlFor="">Hospital Reg. No.</label>
							<span>205868</span>
						</div>
						<div>
							<label htmlFor="">Address</label>
							<span>Opposite Bytco Hospital, Near Railway Station Nasik</span>
						</div>
						<div>
							<label htmlFor="">Doctor Name</label>
							<span>Dr. Abhishek</span>
						</div>
						<div>
							<label htmlFor="">Qualification</label>
							<span>MBBS MD</span>
						</div>
						<div>
							<label htmlFor="">Dr. Registration No.</label>
							<span>A12XYZ</span>
						</div>
						<div>
							<label htmlFor="">Patient Name</label>
							<span>Mr. Taarak Mehta</span>
						</div>
						<div>
							<label htmlFor="">Gender</label>
							<span>Male</span>
						</div>
						<div>
							<label htmlFor="">Patient Address</label>
							<span>Opposite Bytco Hospital, Near Railway Station Nasik</span>
						</div>
						<div>
							<label htmlFor="">Insurance Company</label>
							<span>Bajaj Alianz HIC Ltd</span>
						</div>
						<div>
							<label htmlFor="">Policy No.</label>
							<span>PROHLN3132342_324</span>
						</div>
						<div>
							<label htmlFor="">Health Card No.</label>
							<span>941781487818</span>
						</div>
					</div>
				</Col>
				<Col>
					<div className="delivery_div div_right">
						<div>
							<label htmlFor="">Bill No.</label>
							<input type="text" />
						</div>
						<div>
							<label htmlFor="">Bill Date.</label>
							<span>06/10/2020</span>
						</div>
						<div>
							<label htmlFor="">IPD No.</label>
							<input type="text" />
						</div>
						<div>
							<label htmlFor="">UHID No.</label>
							<input type="text" />
						</div>
						<div>
							<label htmlFor="">PAN No.</label>
							<span>AMBYSHDIO779</span>
						</div>
						<div>
							<label htmlFor="">GST No.</label>
							<span>27AMBYSHD8o9981ZAU</span>
						</div>
						<div>
							<label htmlFor="">Discharge Date & Time</label>
							<span>01/10/2020</span>
						</div>
						<div>
							<label htmlFor="">Room Type & Bed No.</label>
							<span className="span-bed">
								<ol>
									<li> Genaral Ward - B201</li>
									<li> ICU</li>
									<li> Private Room - P301</li>
								</ol>
							</span>
						</div>
						<div className="tpa">
							<div>
								<label htmlFor="">TPA</label>
								<span>N/A</span>
							</div>
							<div>
								<label htmlFor="">CCN/AL No.</label>
								<span>21808412</span>
							</div>
							<div>
								<label htmlFor="">MW Pateint UID</label>
								<span>SRK150219/03</span>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Details;
