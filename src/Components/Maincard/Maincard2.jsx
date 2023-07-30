import React from 'react';
import  "./Maincard2.css";
import tree from "../../Assets/tree.jpg";
import {EmojiEmotions, Label, PermMedia, Room} from "@material-ui/icons";

export default function Maincard2() {
  return (
    <div className="maincard">
        <div className="maincardwrapper">
        <img className="img" src={tree} alt="tree" />
        <input className="text" type="text" placeholder="What's in your mind?  " />
        <hr />
        <div className="sharebottom">

        <div className="tagcontainer">
        <div className="linktags">
        <PermMedia htmlColor='tomato' className="icon"/>
            <span className="tags" >Photos & Videos</span>
        </div>
        <div className="linktags">
        <Label htmlColor='blue' className="icon"/>
            <span className="tags">Tags</span>
        </div>
        <div className="linktags">
        <Room htmlColor='green' className="icon"/>
            <span className="tags">Location</span>
        </div>
        <div className="linktags">
        <EmojiEmotions htmlColor='goldenrod' className="icon"/>
            <span className="tags">Feelings</span>
        </div>
        
          
        </div>

        <button className="button">Share</button>


        </div>


        </div>
       
        


        </div>
        
    
  )
}
