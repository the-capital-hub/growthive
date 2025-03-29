import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import ContactUs from "./screens/ContactUsPage/ContactUs";
import Portfolio from "./screens/Portfolio/Portfolio";
import Team from "./screens/TeamPage/Team";

createRoot(document.getElementById("app") as HTMLElement).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/team" element={<Team />} />
			</Routes>
		</Router>
	</StrictMode>
);
