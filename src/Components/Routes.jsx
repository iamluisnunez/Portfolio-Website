import { Routes as RouterRoutes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/projects" element={<Projects />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
