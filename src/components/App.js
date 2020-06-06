import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from '../pages/Intro';

//Containers
import SignupContainer from '../containers/SignupContainer';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;