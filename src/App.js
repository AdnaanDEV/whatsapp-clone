import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import SidebarChat from "./SidebarChat";




function App() {
  return (

    // BEM naming convention
    <div className="app">

      <div className="app__body"  >
        <Sidebar />
        <Chat />
      

  
        {/* Chat */}
     

      </div>
    
    </div>
  );
}

export default App;
