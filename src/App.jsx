import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar/NavigationBar";
import Landing from "./pages/land/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/ContactPage/Contact";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer";
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
			<Footer></Footer>
		</Router>
	);
};

export default App;
