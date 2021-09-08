import React from "react";
import { Navbar, Nav,Container, NavDropdown} from "react-bootstrap";
import PropTypes from 'prop-types';
function NavbarList(props) {
  return (
    <>
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">{props.abouttext}</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            
          </Nav>
          {/* <Form className="d-flex mx-auto mx-24">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="mx-1">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </>
  );
}

export default NavbarList;

Navbar.propTypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string,
}