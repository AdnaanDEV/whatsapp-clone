import { Avatar, IconButton } from "@material-ui/core";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = React.useState("");

  React.useState(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p> Last seen ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver" }  `}>
          <span className="chat__name"> Adnaan</span>
          Hey Guys
          <span className="chat__timestamp">3:53 PM</span>
        </p>
      </div>

      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
