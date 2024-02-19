import { NavLink } from "react-router-dom";
const NavigationBar = () => {
	return (
		<nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
			<a href="index.html" className="navbar-brand ml-lg-3">
				<h1 className="m-0 display-5">
					<span className="text-primary">Eddington </span>Mpofu
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
					<a href="#home" className="nav-item nav-link active">
						<NavLink to="/">Home</NavLink>
					</a>
					<a href="#about" className="nav-item nav-link">
						<NavLink to="about">About</NavLink>
					</a>

					<a href="#portfolio" className="nav-item nav-link">
						<NavLink to="projects">Projects</NavLink>
					</a>

					<a href="#contact" className="nav-item nav-link">
						<NavLink to="contact">Contact</NavLink>
					</a>
				</div>
			</div>
		</nav>
	);
};
export default NavigationBar;
