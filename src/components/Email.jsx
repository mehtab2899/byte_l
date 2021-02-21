import React, { useState } from "react";
import EditorEmail from "./EditorEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Email = () => {
	const [editorState, seteditorState] = useState();

	const onEditorStateChange = (editorState) => {
		seteditorState(editorState);
	};

	return (
		<React.Fragment>
			<div className="email">
				<div className="email-top text-left">
					<h5>Communication Method</h5>
					<input type="radio" /> <span>Email</span>
					<input type="radio" /> <span>Company Portal</span>
				</div>
				<div className="email-middle">
					<h4>Email Contents</h4>
					<hr />
					<p>To</p>
					<input type="text" />
					<p>Subject</p>
					<input
						type="text"
						placeholder="Denial reply of Taarak Mehata, Policy No.: 4585278/GHJ, Health Card No.: XYZ/2019-20/78B, CCN/AL NO"
					/>
					<p>Email Body</p>
					<EditorEmail />
				</div>

				<div className="attach">
					<h5>Attachments</h5>
					<input type="checkbox" />
					<FontAwesomeIcon className="text-danger ml-3" icon={faFilePdf} />
					<label>Denial Letter</label>
					<a href="">View</a>
					<br />
					<input type="checkbox" />
					<FontAwesomeIcon className="text-danger ml-3 " icon={faFilePdf} />
					<label>Denial Reply Letter</label>
					<a href="">View</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Email;
