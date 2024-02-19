import "./style.css";

import AnimatedTypingComponent from "../../components/TypeAnimation/AnimatedTypingComponent ";
const Landing = () => {
	const minheightstyle = {
		height: "100vh",
	};
	return (
		<div
			className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
			id="home"
			// style={{ minheightstyle }}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
						{/* <img className="img-fluid w-100 rounded-circle shadow-sm" src="img/profile.jpg" alt=""> */}
					</div>
					<div id="name-txt" className="col-lg-7 text-center text-lg-left">
						<h3 className="text-white font-weight-normal mb-3">I'm</h3>
						<h1
							className="display-3 text-uppercase text-primary mb-2"
							// style={{webkit-text-stroke: "2px #ffffff;"}}
						>
							Eddington Mpofu
						</h1>
						<h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>

						<AnimatedTypingComponent></AnimatedTypingComponent>

						<div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
							<a href="" className="btn btn-outline-light mr-5">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
