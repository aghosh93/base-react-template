import React from 'react';
import {
  HashRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Loading from './Loading.react';

const Home = React.lazy(() => import('./pages/Home.react'));
const Castle = React.lazy(() => import('./pages/Castle.react'));

require('../../scss/main.scss');

function Main() {
  return (
    <Router>
      <React.Fragment>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/castle">Castle</Link></li>
          </ul>
        </nav>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/castle" component={Castle} />
          </Switch>
        </React.Suspense>
      </React.Fragment>
    </Router>
  );
}

module.exports = Main;
