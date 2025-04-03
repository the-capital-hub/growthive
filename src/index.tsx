import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import ContactUs from "./screens/ContactUsPage/ContactUs";
import Portfolio from "./screens/Portfolio/Portfolio";
import Team from "./screens/TeamPage/Team";
import Startup from "./screens/startups/GrowtHiveLandingPage";
import Investor from "./screens/investors/GrowtHiveInvestorNetwork";
import Layout from "./components/Layout";

createRoot(document.getElementById("app") as HTMLElement).render(
	<StrictMode>
	  <Router>
		<Routes>
		  <Route path="/" element={<Layout />}>
			<Route index element={<LandingPage />} />
			<Route path="startups" element={<Startup />} />
			<Route path="investors" element={<Investor />} />
			<Route path="contact-us" element={<ContactUs />} />
			<Route path="portfolio" element={<Portfolio />} />
			<Route path="team" element={<Team />} />
		  </Route>
		</Routes>
	  </Router>
	</StrictMode>
  );
