import { Link, NavLink } from "react-router-dom";
import Resume from "../../assets/Eddington-Mpofu-CV.pdf";

const NavigationBar = () => {
	return (
		<>
			<nav
				id="main-nav"
				className="navbar fixed-top shadow-sm navbar-expand-lg bg-primary  navbar-light py-3 py-lg-0 px-lg-5"
			>
			
				<Link className="navbar-brand ml-lg-3" to="/">
					<h1 className="m-0 display-5">
						
						<span className="text-info">Portfolio </span>
					</h1>
				</Link>
				<button
					type="button"
					className="navbar-toggler"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
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

						<a href="#projects" className="nav-item nav-link text-white">
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
						role="button"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</div>
			</nav>
		</>
	);
};
export default NavigationBar;
