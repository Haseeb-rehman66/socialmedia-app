import React from "react";
import { Button } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Maincard.css";
import tree from "../../Assets/tree.jpg";

function Maincard() {
  return (
   
      <div className="container-fluid">
        <div className="row mx-auto mainrow">
          <div className="card maincard">
            <div className="card-body">
              <img src={tree} className="img-thumbnail img" alt="maincard " />
              <textarea
                type="text"
                className="input"
                placeholder="What's in your mind?"
              /> 
               
              <hr />
              <div className="w-100"></div>
              <span class="material-symbols-outlined" id="Picon">photo_library</span>
              <a href="#" className="text-black link-tag">
                Photo or Video
              </a>
              <span class="material-symbols-outlined" id="Ticon">label</span>
              <a href="#" className="text-black link-tag">
                Tag
              </a>
              <span class="material-symbols-outlined" id="Licon">location_on</span>
              <a href="#" className="text-black link-tag">
                Location
              </a>
              <span class="material-symbols-outlined" id="Ficon">mood</span>
              <a href="#" className="text-black link-tag">
                Feelings
              </a>
              <div className="button">
                <Button className="btn btn-success ">Share</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Maincard;
