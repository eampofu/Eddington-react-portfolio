import {Link, NavLink } from "react-router-dom";
import Resume from "../../assets/Eddington-Mpofu-CV.pdf";
const NavigationBar = () => {
	return (
		<>
			<nav
				id="main-nav"
				className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5"
			>
				<a href="#" className="navbar-brand ml-lg-3">
					<h1 className="m-0 display-5">
						<NavLink to="/"></NavLink>
						{/* <span className="nav-class">Eddington </span>Mpofu*/}
					</h1>
				</a>
				<button
					type="button"
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
					<div className="navbar-nav m-auto py-0">
						<a href="#home" className="nav-item nav-link active tag-underline">
							<NavLink to="/" style={{ textDecoration: "none" }}>
								Home
							</NavLink>
						</a>
						<a href="#about" className="nav-item nav-link">
							<NavLink to="about" style={{ textDecoration: "none" }}>
								About
							</NavLink>
						</a>
						<a href="#projects" className="nav-item nav-link">
							<NavLink to="projects" style={{ textDecoration: "none" }}>
								Projects
							</NavLink>
						</a>
						<a href="#contact" className="nav-item nav-link">
							<NavLink to="contact" style={{ textDecoration: "none" }}>
								Contact
							</NavLink>
						</a>
					</div>

					<a
						href={Resume}
						className="btn btn-outline-warning rounded-3"
						role="button" target='_blank' rel='noopener noreferrer'
					>
						Resume
					</a>
				</div>
			</nav>
			{/* <div data-spy="scroll" data-target="#main-nav" data-offset="8">
				<h1></h1>
				<h1></h1>
			</div> */}
		</>
	);
};
export default NavigationBar;
