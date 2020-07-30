import React, { useRef, useEffect } from 'react';
import { useLocation, Switch ,Route} from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import Home from './views/Home';
import Register from './views/Register';
import AboutUs from './views/AboutUs';
import Support from './views/Support';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/support" component={Support} />
        </Switch>
      )} />
  );
}

export default App;