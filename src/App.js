import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {getCurrentUser} from './common/helpers';

import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/show-detail/:id' component={ShowDetail} />
        <Route exact path='/signup' render={props => {

          const currentUser = getCurrentUser();

          if(currentUser !== null){
            props.history.push('/');
          }else{
            return <SignUp />
          }
        }}/>
        <Route exact path='/signin' render={props => {

          const currentUser = getCurrentUser();

          if(currentUser !== null){
            props.history.push('/');
          }else{
            return <SignIn />
          }
        }}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
