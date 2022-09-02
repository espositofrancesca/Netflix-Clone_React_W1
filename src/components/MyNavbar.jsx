
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoNetflix from "../assets/logo.png";
import Form from 'react-bootstrap/Form';
import { BellFill } from "react-bootstrap-icons";
import { Search } from 'react-bootstrap-icons'
import { PersonFill } from "react-bootstrap-icons";

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar">
    
      <Navbar.Brand href="#home">
        <img
          src={LogoNetflix}
          width="120"
          height="70"
          className="d-inline-block align-top"
          alt="Netflix Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tvshow">TV Shows</Nav.Link>
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#recent">Recenly Added</Nav.Link>
          <Nav.Link href="#mylist">My List</Nav.Link>
        </Nav>
        <Nav>
        <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
            />
            <Search className="text-light"/>
            <p> KIDS</p>
            <BellFill/>
            <PersonFill/>
          </Form>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
);

export default MyNavbar;
