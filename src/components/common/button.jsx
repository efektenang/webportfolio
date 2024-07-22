import React from "react";

import "./styles/button.css";

export const Button = (props) => {
	const { label, href } = props;
	return (
		<div className="container">
			<a href={href} class="button type--A">
				<div class="button__line"></div>
				<div class="button__line"></div>
				<span class="button__text">{label}</span>
			</a>
		</div>
	);
};
