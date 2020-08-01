import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Success from './views/Success-case';
import LawInfoDetail from './views/Law-firm-detail';
import LawInfoResult from './views/Law-firm-result';
import LawInfo from './views/Law-firm';
import AboutUs from './views/About-us';
import Members from './views/Members';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/success" component={Success} layout={LayoutDefault} />
          <AppRoute exact path="/lawInfoDetail" component={LawInfoDetail} layout={LayoutDefault} />
          <AppRoute exact path="/lawInfo" component={LawInfo} layout={LayoutDefault} />
          <AppRoute exact path="/lawInfoResult" component={LawInfoResult} layout={LayoutDefault} />
          <AppRoute exact path="/aboutUs" component={AboutUs} layout={LayoutDefault} />
          <AppRoute exact path="/members" component={Members} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;