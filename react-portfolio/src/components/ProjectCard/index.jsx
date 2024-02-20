import projects from "../../assets/projects.json";
const ProjectCard = (props) => {
	// check how your props object looks like
	//console.log(props);

	return (
		// <div className="col-lg-4 col-md-6 mb-4">
		// 	<div className="card">
		// 		{/* <div className="img-container "> */}
		// 		<img alt={props.name} src={props.image} className="card-img-top" />
		// 		{/* </div> */}
		// 		<div className="container">
		// 			<ul className="list-group list-group-flush">
		// 				<li className="card-header bg-success text-white">
		// 					<p className="card-title">{props.name}</p>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<p className="card-text bg-warning">{props.description}</p>
		// 				</li>
		// 				<li className="list-group-item">
		// 					<div className="card-footer align-items">
		// 						<a href={props.github}>
		// 							<img
		// 								src="https://img.icons8.com/ios/40/000000/github.png"
		// 								alt="github-icon"
		// 								id="port-icon"
		// 							/>
		// 						</a>
		// 						<a href={props.deployedapp}>
		// 							<img
		// 								src="https://img.icons8.com/metro/35/000000/cursor.png"
		// 								alt="app-icon"
		// 								id="port-icon"
		// 							/>
		// 						</a>
		// 					</div>
		// 				</li>
		// 				<li>{props.skills}</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>

    <div className="card"> 
    <div className="img-container">
      <img alt={props.name} src={props.image}/>
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
          <a href={props.github}><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
          <a href={props.deployedapp}><img src="https://img.icons8.com/metro/35/000000/cursor.png" alt="app-icon" id="port-icon"/></a> 
          </div>
        </li>
        <li>
        {props.skills}
        </li>
      </ul>
    </div>
  </div>
	);
};

export default ProjectCard;
