import React, { useState } from "react";

import { Avatar } from "@material-ui/core";

import "./SidebarChat.css";

function SidebarChat( {addNewChat}) {
  const [seed, setSeed] = useState("");

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const createChat = ()=>{

    const roomName = prompt("Enter room name") ;

    if(roomName) {
        // do some clever database stuff 
    }



  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
      <div onClick={createChat}  className="sidebarChat"   >
          <h2>Add new Chat</h2> 
      </div>
  )
}

export default SidebarChat;
