import "./style.css";

import AnimatedTypingComponent from "../../components/TypeAnimation/AnimatedTypingComponent ";
import Eddieimage from "../../assets/images/eddie.jpg";
const Landing = () => {
	return (
		<div
			className="container-fluid d-flex bg-container align-items-center mb-5 py-5 "
			id="home"
		>
			<div className="container ">
				<div className="row align-items-center">
					<div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
						<img
							className="img-fluid w-100 rounded-circle shadow-sm"
							src={Eddieimage}
							alt="Eddington"
						/>
					</div>
					<div id="name-txt" className="col-lg-7 text-center text-lg-left">
						<h3 className="text-white font-weight-normal mb-3">I'm</h3>
						<h1 className="display-3 text-uppercase text-primary mb-2">
							Eddington Mpofu
						</h1>
						<h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
						<div className="text-info">
							<AnimatedTypingComponent></AnimatedTypingComponent>
						</div>

						<div className="d-flex justify-content-center mb-4">
							<a href="https://www.linkedin.com/in/eampofu">
								<img
									src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png"
									alt="linkedin-logo"
									className="icon"
								/>
							</a>
							<a href="https://github.com/eampofu">
								<img
									src="https://img.icons8.com/doodle/100/000000/github--v1.png"
									alt="github-logo"
									className="icon"
								/>
							</a>

							<a href="mailto:eampofu@gmail.com">
								<img
									src="https://img.icons8.com/doodle/120/000000/new-post.png"
									alt="mail-logo"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
