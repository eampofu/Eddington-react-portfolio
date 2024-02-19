import projects from "../../assets/projects.json";
import ProjectCard from "../ProjectCard";

const Wrapper = (props) => {
	return <div className="wrapper">{props.children}</div>;
};
const ProjectsGallery = () => {
	return (
		<>
			<div className="project">
				<h1 className="title">Projects</h1>
			</div>

			<Wrapper>
				{projects.map((project) => (
					<ProjectCard
						name={project.name}
						key={project.id}
						image={project.image}
						github={project.github}
						deployedapp={project.deployedapp}
						skills={project.skills}
						description={project.description}
					/>
				))}
			</Wrapper>
		</>
	);
};

export default ProjectsGallery;
