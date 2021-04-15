import React from "react";

const EmailHeader = () => {
	return (
		<div>
			<div className="boxes mt-1">
				<div className="box-one">
					<div className="mx-2">
						<input type="checkbox" name="emails" id="" />
						<label className="ml-1" htmlFor="emails">
							Email without status
						</label>
					</div>
					<div>
						<input type="checkbox" name="emails" id="" />
						<label className="ml-1" htmlFor="emails">
							Email with no case assigned
						</label>
					</div>
				</div>
				<div className="">
					<span>Page 1 of 1 </span>
					<span className="icons">
						<i class="fas fa-chevron-left"></i>
					</span>
					<span className="icons">
						<i class="fas fa-chevron-right"></i>
					</span>
				</div>
			</div>
		</div>
	);
};

export default EmailHeader;
