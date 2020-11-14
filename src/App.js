import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState,useContext } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login"
import { StateContext, useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  // const [userState,dispatch] = useStateValue();
  const [user,dispatch] = useContext(StateContext)
  return (
    // BEM naming convention
    <div className="app">

      {!user.user ? (

        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
