import React from "react";
import "./MyInput.css";

interface Props {
	name: string;
	label: string;
	value: string;
	onChange: any;
}

const MyInput = ({ name, label, value, onChange }: Props) => {
	return (
		<div className="group">
			<input
				type="text"
				id={name}
				name={name}
				required
				className="text_input"
				value={value}
				onChange={onChange}
			/>
			<span className="highlight"></span>
			<span className="bar"></span>
			<label className="text_label">{`${label} :`}</label>
		</div>
	);
};

export default MyInput;
