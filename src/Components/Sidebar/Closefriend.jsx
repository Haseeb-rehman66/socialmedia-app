import React from 'react';
import "./Closefriend.css";

export default function Closefriend({user}) {
  return (
    <li className="sidebarFriends">
    <img src={user.profilepicture} alt="tree" className="sidebarfimg" />
    <span className="sidebarname">{user.username}</span>

</li>
    
  )
};
