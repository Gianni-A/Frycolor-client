import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from '../pages/Intro';

//Containers
import SignupContainer from '../containers/SignupContainer';
import ProfileContainer from '../containers/ProfileContainer';
import ProfileFormContainer from '../containers/ProfileFormContainer';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/editProfile" component={ProfileFormContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;