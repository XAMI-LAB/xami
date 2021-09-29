import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import PublicationsPage from './pages/PublicationsPage';
import OurMissionPage from './pages/OurMissionPage';
import ResearchProjectsPage from './pages/ResearchProjectsPage';

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
          {/* <Route path="/members">
            <MembersRoutePage />
          </Route>
          <Route path="/mission">
            <OurMissionPage />
          </Route>
          <Route path="/publications">
            <PublicationRoutePage />
          </Route>
          <Route path="/research-plan">
            <ResearchPlanPage />
          </Route>
          <Route path="/open-source-tools">
            <OpenSourceToolsPage />
          </Route> */}
          {/* <Route path="/playground">
            <PlaygroundRoute />
          </Route>
          <Route path="/markdown/update/:destination">
            <MarkdownEditingPage />
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
