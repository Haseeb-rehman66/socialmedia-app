import React from 'react';
import birthday from "../../Assets/birthday-icon.jpg";
import addimg from "../../Assets/add-image.png";
import "./Rightbar2.css";
import {users} from "../../Components/Dummydata/Dummydata";
import Online from '../Online/Online';

export default function Rightbar2({profile}) {



  const Homerightbar = () => {

    return(
      <>
      <div className="birthdaycontainer">
            <img className="birthdayimg" src={birthday} alt="birthday" />
            <span className="birthdaytext"> <b>Arsalan</b> and <b>3 other friends</b> have birthday today</span>
            </div>
            <div className="addimage">
              <img className="addimg" src={addimg} alt="add-image" />
            </div>
            <h4 className="rightbartitle">Online friends</h4>
            <ul className="righbarfriendslist">
              {users.map(u =>(
                <Online key={u.id} user={u}/>

              ))} 
            
            </ul>
           
      
      
      </>
    )
  }

  const Profilerightbar = () => {
    return(
     <>
     <h4 className="rightbarTitle">User info</h4>
     <div className="rightbarinfo">
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">City:</span>
        <span className="rightbarinfovalue">Islamabad</span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">Relationship:</span>
        <span className="rightbarinfovalue">Married</span>
      </div>
     </div>
     <h4 className="rightbarTitle">User Friends</h4>
     <div className="rightbarfollowings">
      <div className="rightbarfollowing">
        <img src="./Assets/nature.jpg" alt="" className="rightbarfollowingimg" />
        <span className="rightbarfollowingname">Ali</span>
      </div>
      <div className="rightbarfollowing">
        <img src="./Assets/camera.jpg" alt="" className="rightbarfollowingimg" />
        <span className="rightbarfollowingname">Akhtar</span>
      </div>
      <div className="rightbarfollowing">
        <img src="./Assets/number.jpg" alt="" className="rightbarfollowingimg" />
        <span className="rightbarfollowingname">Khalid</span>
      </div>
     </div>

     </>
    )
  }
 
  return (
    <div className="Rightbar">
        <div className="Rightbarwrapper">
          
           {profile ? <Profilerightbar/> : <Homerightbar/>}
        </div>

    </div>
  )
}
