import React from "react";

import "./styles/button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ icon, ...props }) => {
	const { label, href } = props;
	return (
		<div className="container">
			<a href={href} target="_blank" rel="noreferrer" class="button type--A">
				<div class="button__line"></div>
				<div class="button__line"></div>
				<span class="button__text">
					{label}{" "}
					{icon && (
						<FontAwesomeIcon
							icon={icon}
							style={{ marginLeft: "10px" }}
						/>
					)}{" "}
				</span>
			</a>
		</div>
	);
};
