import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Birms</Link>
          </li>
          <li>
            <Link to="/post">New Birm</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/post">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;