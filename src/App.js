import React, { useRef, useEffect } from 'react';
import { useLocation, Switch ,Route} from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import Home from './views/Home';

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
        </Switch>
      )} />
  );
}

export default App;