import React, { Fragment, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import {
  HashRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Loading from './Loading.react';

import variables from '../../scss/main.scss';

const Home = lazy(() => import('./pages/Home.react'));
const Castle = lazy(() => import('./pages/Castle.react'));

function Main() {
  return (
    <Router>
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={variables.themeColor} />
          <title>Welcome to the Base</title>
        </Helmet>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/castle">Castle</Link></li>
          </ul>
        </nav>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/castle" component={Castle} />
          </Switch>
        </Suspense>
      </Fragment>
    </Router>
  );
}

module.exports = Main;
