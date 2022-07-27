import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import PublicationsPage from './pages/PublicationsPage';
import OurMissionPage from './pages/OurMissionPage';
import ResearchProjectsPage from './pages/ResearchProjectsPage';
import VideoPage from './pages/VideoPage'
import XPPAProjectsPage from './pages/ResearchProjects/XPPAProjectsPage'
import CausalModelsProjectsPage from './pages/ResearchProjects/CausalModelsProjectsPage'
import PersuasiveModelsProjectsPage from './pages/ResearchProjects/PersuasiveModelsProjectsPage'
import ExplainableMedicalProjectsPage from './pages/ResearchProjects/ExplainableMedicalProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path="/members">
            <MembersPage />
          </Route>
          <Route path="/publications">
            <PublicationsPage />
          </Route>
          <Route path="/our-mission">
            <OurMissionPage />
          </Route>
          <Route path="/research-projects">
            <ResearchProjectsPage />
          </Route>
          <Route path="/videos">
            <VideoPage />
          </Route>
          {/* Project pages */}
          <Route path="/Explainable-Predictive-Process-Analytics">
            <XPPAProjectsPage />
          </Route>
          <Route path="/Causal-Models">
            <CausalModelsProjectsPage />
          </Route>
          <Route path="/Persuasive-Models">
            <PersuasiveModelsProjectsPage />
          </Route>
          <Route path="/Explainable-Medical">
            <ExplainableMedicalProjectsPage />
          </Route>


          <Redirect to="/" />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
