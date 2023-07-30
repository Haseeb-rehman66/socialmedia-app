import React from "react";
import { useState } from "react";
import Topcard from "../../Components/Maincard/Topcard";
import Rightbar2 from "../../Components/Rightbar/Rightbar2";
import Sidebar2 from "../../Components/Sidebar/Sidebar2";
import Topbar2 from "../../Components/Topbar/Topbar2";
import './Home.css';

export default function Home(prop) {
  // const getprop = (ishome) => {
  //   prop.home(ishome);
  //   console.log(ishome);
    
  // }
  // const timeline = (istimeline) => {
  //   prop.timeline(istimeline);
  //   console.log(istimeline);
  // }
  const [open, setOpen] = useState(false);
  

  const clickHandle = () =>{
    setOpen(!open);
    console.log("clicked");
    
  };
  

  return (
    <>
      <Topbar2 click={clickHandle}/>
  
      <div className="homecontainer">

      <Sidebar2 open={open}/>
      <Topcard/>
      <Rightbar2/>
    
      </div>
      
    </>
     
  );
}
