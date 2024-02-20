import projects from "../../assets/projects.json";
const ProjectCard = (props) => {
	return (
		<div className="card">
			<div className="img-container card-img-wrap">
				<img alt={props.name} src={props.image} />
			</div>
			<div className="content">
				<ul>
					<li>
						<p className="project-title">{props.name}</p>
					</li>
					<li>
						<p className="project-description">{props.description}</p>
					</li>
					<li>
						<div className="project-icons">
							<a href={props.github}>
								<img
									src="https://img.icons8.com/ios/40/000000/github.png"
									alt="github-icon"
									id="port-icon"
								/>
							</a>
							<a href={props.deployedapp}>
								<img
									src="https://img.icons8.com/metro/35/000000/cursor.png"
									alt="app-icon"
									id="port-icon"
								/>
							</a>
						</div>
					</li>
					<li>{props.skills}</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectCard;
