import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import {auth,provider} from "./firebase";
import { StateContext, useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

export default function Login() {

    // const [{},dispatch] = useStateValue() ; // shoot at data layer to update the value
//    const [{},dispatch] = useStateValue()
 const [user,dispatch] = React.useContext(StateContext)

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result)=>{
      console.log("*******************&&&&&&&&&&&&&&&&&&&&&")
      console.log(result)
        dispatch({
            type:actionTypes.SET_USER,
            payload:result.user
        })
    })
    .catch((err)=>{
        console.log(err)

    })
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png"></img>

        <div className="login__text">
          <h1>Sign in to whatsapp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In with google
        </Button>
      </div>
    </div>
  );
}
