import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const HomePage = lazy(() =>
  import(/* webpackChunkName: "home" */ './home')
);

function Pages() {
  return (
    <Router basename="/">
      <Switch>
        <Suspense fallback="">
          <Route exact path="/" component={HomePage} />
        </Suspense>
      </Switch>
    </Router>
  );
}
Pages.whyDidYouRender = true;

export default Pages;
