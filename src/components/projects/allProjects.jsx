import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import truncateText from "../../utils/truncateText";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => {
				const descriptionText = truncateText(project.description, 10);
				return (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={descriptionText}
							linkText={project.linkText}
							link={project.link}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default AllProjects;
