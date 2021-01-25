import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Contact from './Pages/contact/Contact';
import Main from './Pages/main/Main';
import NotFound from './Pages/404/404';
import Privacy from './Pages/privacy/Privacy';
import Terms from './Pages/terms/Terms';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" render={(props) => <Contact {...props} pageName="Contact Us" />} />
        <Route exact path="/privacy" render={(props) => <Privacy {...props} pageName="Privacy Policy" />} />
        <Route exact path="/terms" render={(props) => <Terms {...props} pageName="Terms of Use" />} />
        <Route exact path="/" render={(props) => <Main {...props} pageName="Main" />} />
        <Route path="/404" render={(props) => <NotFound {...props} pageName="404" />} />
        <Redirect from='*' to='/404'/>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);