import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { getUserInformationStore } from '../util/Utils';
import Intro from '../pages/Intro';

//Containers
import SignupContainer from '../containers/SignupContainer';
import ProfileContainer from '../containers/ProfileContainer';
import ProfileFormContainer from '../containers/ProfileFormContainer';
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import RestorePasswordContainer from '../containers/RestorePasswordContainer';
import ChangePasswordContainer from '../containers/ChangePasswordContainer';
import LoginContainer from '../containers/LoginContainer';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import FriendRequestContainer from '../containers/FriendRequestContainer';

function App() {
  const user = getUserInformationStore();

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/newsFeed" /> : <Intro />}
        </Route>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/profile/:userId" component={ProfileContainer} />
        <Route exact path="/editProfile/:userId" component={ProfileFormContainer} />
        <Route exact path="/forgotPassword" component={ForgotPasswordContainer} />
        <Route exact path="/restorePassword/:userId" component={RestorePasswordContainer} />
        <Route exact path="/changePassword" component={ChangePasswordContainer} />
        <Route exact path="/newsFeed" component={NewsFeedContainer} />
        <Route exact path="/friend/request" component={FriendRequestContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;