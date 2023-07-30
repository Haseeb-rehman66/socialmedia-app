import React from "react";

import { Button, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.css";

export default function topbar() {
  return (
    <div>
      <div className="App">
        <Navbar className=" main" expand="md">
          <NavbarBrand href="#" className="text-white">
            Socialmedia App
          </NavbarBrand>
          <form className="form">
            <input className="search" type="search" placeholder="Search" />
          </form>
          <Navbar.Toggle aria-controls="ny-nav" />
          <Navbar.Collapse id="my-nav" className="nav_align">
            <Nav className="fw-bold">
              <Nav.Link href="#" className="text-white">
                Homepage
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Timeline
              </Nav.Link>
              <NavDropdown title="Profile" id="my-nav">
                <NavDropdown.Item href="#">settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
