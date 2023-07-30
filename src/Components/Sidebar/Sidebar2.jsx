import React from 'react';
import "./Sidebar2.css";
import {Chat, Group, RssFeed, Videocam} from "@material-ui/icons";
import {users} from "../../Components/Dummydata/Dummydata";
import Closefriend from './Closefriend';

export default function Sidebar2({open}) {
  return (
    // {open? "sidebar" : "collapse"}
    <div className={open? "collapse": "sidebar"}>
        <div className="sidebarwrapper">
            <ul className="sidebarlist">
                <li className="sidebaritem">
                    <RssFeed className="icon"/>
                    <span className="listtext">Feed</span>
                </li>
                <li className="sidebaritem">
                    <Chat className="icon"/>
                    <span className="listtext">Chats</span>
                </li>
                <li className="sidebaritem">
                    <Videocam className="icon"/>
                    <span className="listtext">Videos</span>
                </li>
                <li className="sidebaritem">
                    <Group className="icon"/>
                    <span className="listtext">Groups</span>
                </li>
            </ul>
            <button className="sidebarbutton">Show more</button>
            <hr className="sidenbarhr"/>

            <ul className="sidebarfriendlist">
              
             {users.map((u) => (
                <Closefriend key={u.id} user={u}/>
             ))}
             
                
            </ul>
           
            
            
            

        </div>
    </div>
  )
}
