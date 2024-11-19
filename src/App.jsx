import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProjectsPage from "./pages/ProjectPage/ProjectPage.jsx";
import ExperiencesPage from "./pages/ExperiencePage/ExperiencePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
