import React from "react";
import { button, Nav } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Scrollbars } from "react-custom-scrollbars";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="container-fluid container-width">
      
      <div className="row row-width">
        <div className="col-auto bg-none min-vh-100  col-wd ">
          <Scrollbars>
            <Nav className="fw-bold ">
              <span className="material-symbols-outlined" id="icon">
                rss_feed
              </span>
              <Nav.Link href="#" className="text-black">
                Feed
              </Nav.Link>
              <div className="w-100"></div>
              <span class="material-symbols-outlined" id="icon">
                forum
              </span>
              <Nav.Link href="#" className="nav-link text-black">
                Chats
              </Nav.Link>
              <div className="w-100"></div>
              <span class="material-symbols-outlined" id="icon">
                video_library
              </span>
              <Nav.Link href="#" className="text-black">
                Videos
              </Nav.Link>
              <div className="w-100"></div>
              <span class="material-symbols-outlined" id="icon">
                group
              </span>
              <Nav.Link href="#" className="text-black">
                Groups
              </Nav.Link>
              <div className="w-100"></div>
              <button className="btn btn-outline-dark pt-auto">
                Show More
              </button>
              <div className="w-100"></div>
              



              <hr className="divider"/>
              

              <div>Friends online</div>
            </Nav>
          </Scrollbars>
          
        </div>
      </div>
     
      
    </div>
  
  );
}

export default Sidebar;
