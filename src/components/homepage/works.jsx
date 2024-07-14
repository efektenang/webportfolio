import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experiences"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./corporate.png"
								alt="corporate"
								className="work-image"
							/>
							<div className="work-title">PT. Raksasa Indonesia</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./admin.png"
								alt="UMSU Logo"
								className="work-image"
							/>
							<div className="work-title">Biro Sistem Informasi, UMSU</div>
							<div className="work-subtitle">
								Web Programmer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./admin.png"
								alt="UMSU Logo"
								className="work-image"
							/>
							<div className="work-title">Biro Sistem Informasi, UMSU</div>
							<div className="work-subtitle">
								IT Support, Web Programmer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;