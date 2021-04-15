import React from "react";
import Email from "./Email";
import EmailBody from "./EmailBody";

const EM = () => {
	return (
		<div>
			{Email.map((val, ind) => {
				return (
					<EmailBody
						key={ind}
						img={val.img}
						title={val.title}
						img1={val.img1}
						title1={val.title1}
					/>
				);
			})}
		</div>
	);
};

export default EM;
