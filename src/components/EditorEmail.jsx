import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditorEmail = () => {
	const [text, setText] = useState();

	return (
		<div>
			<CKEditor
				editor={ClassicEditor}
				data={text}
				onChange={(event, editor) => {
					const data = editor.getData();
					setText(data);
				}}
			/>
		</div>
	);
};

export default EditorEmail;
