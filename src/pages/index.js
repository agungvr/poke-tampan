import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MainLayout from '@tampan/components/layout';

const HomePage = lazy(() =>
  import(/* webpackChunkName: "home" */ './home')
);

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

function Pages() {
  return (
    <Router basename="/">
      <Switch>
        <Suspense fallback="">
          <MainRoute exact path="/" component={HomePage} />
        </Suspense>
      </Switch>
    </Router>
  );
}
Pages.whyDidYouRender = true;

export default Pages;
