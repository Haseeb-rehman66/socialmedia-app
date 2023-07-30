import React from 'react';
import Topcard from "../../Components/Maincard/Topcard";
import Rightbar2 from "../../Components/Rightbar/Rightbar2";
import Sidebar2 from "../../Components/Sidebar/Sidebar2";
import Topbar2 from "../../Components/Topbar/Topbar2";
import './Profile.css';

function Profile(prop) {


  // const getprop = (ishome) => {
  //   prop.home(ishome);
  //   console.log(ishome);
    
  // }

  // const timeline = (istimeline) => {
  //   prop.timeline(istimeline);
  //   console.log(istimeline);
  // }



  return (
    
    <>
    {/* <Topbar2 home = {getprop}  timeline = {timeline}/>  */}
    <Topbar2/>
    <div className="profile">
    
    <Sidebar2 />
    <div className="profileRight">
    <div className="profileRightTop">
        <div className="profilecover">
        <img src="./Assets/camera.jpg" alt="" className="profilecover" />
        <img src="./Assets/tree.jpg" alt="" className="profileuserimage" />
        </div>

        <div className="profileinfo">
        <h4 className="profileinfoname">Arsalan</h4>
        <span className="profileinfodes">Hello my friends!</span>

        </div>
        
    </div>
    <div className="profileRightBottom">
    <Topcard/>
    <Rightbar2 profile/>
    </div>
    </div>
  
    </div>
    
  </>

    
  );
}

export default Profile