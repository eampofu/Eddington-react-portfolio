import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar/NavigationBar";
import Landing from "./pages/land/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/ContactPage/Contact";
import ContactMe from "./components/ContactMe/ContactMe";
import "./index.css";

const App = () => {
	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Landing />} />

				<Route path="projects" element={<Projects />} />
				<Route path="contact" element={<Contact />} />
				<Route path="contact" element={<ContactMe />} />
			</Routes>
		</Router>
	);
};

export default App;
