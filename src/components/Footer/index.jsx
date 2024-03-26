import React from "react";
import "./style.css";

function Footer() {
	return (
		// <footer className="footer">
		//   <span>Eddington Mpofu 2024</span>
		// </footer>

		<div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
			<div className="container text-center py-5">
				<div className="d-flex justify-content-center mb-4">
					<a href="https://www.linkedin.com/in/eampofu">
						<img
							src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
							alt="linkedin-logo"
							className="icon"
						/>
					</a>
					<a href="https://github.com/eampofu">
						<img
							src="https://img.icons8.com/doodle/50/000000/github--v1.png"
							alt="github-logo"
							className="icon"
						/>
					</a>
					<a href="mailto:ampofu@gmail.com">
						<img
							src="https://img.icons8.com/doodle/60/000000/new-post.png"
							alt="mail-logo"
						/>
					</a>{" "}
				</div>

				<p className="m-0">
					&copy;{" "}
					<a
						className="text-white font-weight-bold"
						href="https://www.linkedin.com/in/eampofu"
					>
						Eddington Mpofu
					</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;
