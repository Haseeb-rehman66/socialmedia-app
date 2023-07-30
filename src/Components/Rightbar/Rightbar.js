import React from 'react';
import { Nav } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Rightbar.css';
import add_image from "../../Assets/add-image.jpg";
import birthday from "../../Assets/birthday-icon.jpg";

function Rightbar() {
  return (
    <div className="container-fluid container-width">
      <div className="row row-width">
        <div className="col-auto bg-none min-vh-100">
          <div className="">
          <img src={birthday} className="img-thumbnail img" alt="birthday" />
          <a href="#" className="text-black link-tag float-right">
                Upcoming Birthdays
              </a>
          </div>
          <img src={add_image} className="img-fluid rounded add_image" alt="add_image"/>
          <div className="online-friends">
            <span className="fw-bold ">Online Friends</span>


            <Nav className="fw-light">
           
              <Nav.Link href="#" className="text-black">
                ALi
              </Nav.Link>
              <div className="w-100"></div>
            
              <Nav.Link href="#" className="nav-link text-black">
                Arsalan
              </Nav.Link>
              <div className="w-100"></div>
              
              <Nav.Link href="#" className="text-black">
                Nayyer
              </Nav.Link>
              <div className="w-100"></div>
             
              <Nav.Link href="#" className="text-black">
                Naqash
              </Nav.Link>
              
            </Nav>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Rightbar