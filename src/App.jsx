import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/"         element={<HomePage />}    />
        <Route path="/about"    element={<AboutPage />}   />
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/skills"   element={<SkillsPage />}  />
        <Route path="/resume"   element={<ResumePage />}  />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;