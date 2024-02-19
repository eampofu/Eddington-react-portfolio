import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar/NavigationBar";
import Landing from "./pages/land/Landing";
import Projects from "./pages/Projects";
import "./index.css";

const App = () => {
	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Landing />} />
			
        <Route path="projects" element={<Projects />} />
			</Routes>
		</Router>
	);
};

export default App;
