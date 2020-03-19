import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './Intro';
import Signup from './Signup';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;