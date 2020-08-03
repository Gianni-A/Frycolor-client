import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from '../pages/Intro';

//Containers
import SignupContainer from '../containers/SignupContainer';
import ProfileContainer from '../containers/ProfileContainer';
import ProfileFormContainer from '../containers/ProfileFormContainer';
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import RestorePasswordContainer from '../containers/RestorePasswordContainer';
import ChangePasswordContainer from '../containers/ChangePasswordContainer';
import LoginContainer from '../containers/LoginContainer';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/editProfile" component={ProfileFormContainer} />
        <Route exact path="/forgotPassword" component={ForgotPasswordContainer} />
        <Route exact path="/restorePassword/:userId" component={RestorePasswordContainer} />
        <Route exact path="/changePassword/" component={ChangePasswordContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;