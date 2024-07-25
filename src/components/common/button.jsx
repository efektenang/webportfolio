import React from "react";

import "./styles/button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ icon, ...props }) => {
	const { label, href } = props;
	return (
		<div className="container">
			<a href={href} target="_blank" rel="noreferrer" className="button type--A">
				<div className="button__line"></div>
				<div className="button__line"></div>
				<span className="button__text">
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
