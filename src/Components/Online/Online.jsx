import React from 'react';
import "./Online.css";
import tree from "../../Assets/tree.jpg";

function Online({user}) {
  
  return (
   
          <li className="rightbarfriend">
                <div className="rightbarimagecontainer">
                  <img src={user.profilepicture} alt="" className="profileimage" />
                  <span className="rightbaronline"></span>
                </div>
                <span className="rightbarusername">
                  {user.username}
                </span>
              </li>

  )
}

export default Online