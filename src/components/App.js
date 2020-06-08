import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from '../pages/Intro';

//Containers
import SignupContainer from '../containers/SignupContainer';
import ProfileContainer from '../containers/ProfileContainer';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;