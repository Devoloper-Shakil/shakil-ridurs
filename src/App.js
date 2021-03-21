import React, { createContext, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import Riders from './Components/Riders/Riders';
// import Destintion from './Components/Destintion/Destintion';
import Heder from "./Components/Heder/Heder";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import UserPick from "./Components/UserPick/UserPick";
import NotFount from "./Components/NotFount/NotFount";
export const userContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <userContext.Provider value={[loginUser, setLoginUser]} >
      <Router>
        <Heder></Heder>
        <Switch>
          <Route exact path="/">
            <Riders></Riders>
          </Route>
          <Route path="/home">
            <Riders></Riders>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/name/:name">
            <UserPick></UserPick>
          </PrivateRoute>
          <PrivateRoute path="/destintion">
          
            <NotFount></NotFount>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
