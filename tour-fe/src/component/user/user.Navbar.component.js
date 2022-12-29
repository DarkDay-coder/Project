import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <>
         <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
               <Navbar.Brand>Local Tour Guide</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavLink className="nav-link text-light" to="/">
                        Home<i className="icofont-home"></i>
                     </NavLink>
                     <NavDropdown
                        className="text-light"
                        title="Tours"
                        id="collasible-nav-dropdown"
                     >
                        <NavDropdown.Item
                           className=" text-secondary"
                           href="/tours"
                        >
                           All Tours
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                           className="text-secondary"
                           href="/tours/:id"
                        >
                           Tour Details
                        </NavDropdown.Item>
                     </NavDropdown>
                     <NavDropdown
                        className="text-light"
                        title="Explore More"
                        id="collasible-nav-dropdown"
                     >
                        <NavDropdown.Item href="/">
                           <i className="icofont-search-map"></i> Search Tours
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                           <i className="icofont-papers"></i> Guide List
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                           <i className="icofont-cheer-leader"></i> Lead Guide
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.1">
                           <i className="icofont-info-circle"></i> About Us
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                           <i className="icofont-group"></i> Our Team
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                           <i className="icofont-connection"></i> Contact Us
                        </NavDropdown.Item>
                     </NavDropdown>
                     <NavLink className="nav-link text-light" to="/blog">
                        <i className="icofont-blogger"></i> Blog
                     </NavLink>
                     <NavLink className="nav-link text-light" to="/cart">
                        Your Bookings <i className="icofont-cart"></i>
                     </NavLink>
                  </Nav>
                  <Nav>
                     <NavLink
                        className="btn btn-success hover-overlay mx-1"
                        to="/login"
                     >
                        <i className="icofont-user"></i> Sign In
                     </NavLink>
                     <NavLink
                        className="btn btn-success hover-overlay mx-1"
                        to="/register"
                     >
                        <i className="icofont-users"></i> Register
                     </NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default NavBar;
