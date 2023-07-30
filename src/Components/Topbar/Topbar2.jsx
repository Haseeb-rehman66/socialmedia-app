import React from 'react';
import './Topbar2.css';
import {Chat, Person, Notifications, Search,Menu} from "@material-ui/icons";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Topbar2({ click }) {

  
    const navigate = useNavigate();



console.log("topbar");

  return (
    <div className="topbar">
            
            <div className="topleft">
            <Menu className="menu-icon" onClick={click}/>
            
            
            <span className="logo">SocialmediApp</span>
            </div>
            <div className="topcenter">
                <Search className="searchicon"/>
                <input placeholder="Search for friend,post and video" type="text" className="searchbar" />
            </div>
            <div className="topright">
            <div className="links">
                <span className="link" onClick={() => navigate("/timeline")}>Homepage</span>
                <span className="link" onClick={() => navigate("/")}>Timeline</span>
            </div>
            <div className="topbaricons">
                <div className="indicators">
                    <Person className='icon'/>
                    <span className="iconcounter">1</span>
                </div>
                <div className="indicators">
                    <Chat className='icon'/>
                    <span className="iconcounter">3</span>
                </div>
                <div className="indicators">
                    <Notifications className='icon'/>
                    <span className="iconcounter">4</span>
                </div>
                </div>
            <div className="profileimg">
                <img src="./Assets/tree.jpg" alt="" className="profilepic" />
            </div>
            </div>
        </div>
    
  )
};
