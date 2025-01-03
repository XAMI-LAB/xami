import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import PublicationsPage from './pages/PublicationsPage';
import OurMissionPage from './pages/OurMissionPage';
import ResearchProjectsPage from './pages/ResearchProjectsPage';
import VideoPage from './pages/VideoPage';
import XPPAProjectsPage from './pages/ResearchProjects/XPPAProjectsPage';
import CausalModelsProjectsPage from './pages/ResearchProjects/CausalModelsProjectsPage';
import PersuasiveModelsProjectsPage from './pages/ResearchProjects/PersuasiveModelsProjectsPage';
import ExplainableMedicalProjectsPage from './pages/ResearchProjects/ExplainableMedicalProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* Other Routes */}
          <Route path="/members" element={<MembersPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/our-mission" element={<OurMissionPage />} />
          <Route path="/research-projects" element={<ResearchProjectsPage />} />
          <Route path="/videos" element={<VideoPage />} />

          {/* Project Pages */}
          <Route
            path="/Explainable-Predictive-Process-Analytics"
            element={<XPPAProjectsPage />}
          />
          <Route path="/Causal-Models" element={<CausalModelsProjectsPage />} />
          <Route
            path="/Persuasive-Models"
            element={<PersuasiveModelsProjectsPage />}
          />
          <Route
            path="/Explainable-Medical"
            element={<ExplainableMedicalProjectsPage />}
          />

          {/* Redirect to Home for Unknown Paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;