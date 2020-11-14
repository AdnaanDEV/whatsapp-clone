import { Avatar, IconButton } from "@material-ui/core";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { StateContext } from "./StateProvider";
import firebase from "firebase";

function Chat() {
  const [seed, setSeed] = React.useState("");
  const [input, setInput] = React.useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [user, dispatch] = React.useContext(StateContext);
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  React.useEffect(() => {
    if (roomId) {
      //Getting rooms name
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      // Getting all chats
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          return setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p> Last seen ... 
            {new Date(
              messages[messages.length -1]?.
              timestamp?.toDate()
            ).toUTCString()}
            
             </p>
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
        {messages.map((message) => {
          return (
            <p className={`chat__message ${message.name === user.user.displayName && "chat__receiver"}  `}>
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
              </span>
            </p>
          );
        })}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
