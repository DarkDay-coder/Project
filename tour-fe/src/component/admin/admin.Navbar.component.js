import { useState } from 'react';
import { Button, Form, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
   const logout = (e) => {
      e.preventDefault();
      localStorage.removeItem('token_tour');
      localStorage.removeItem('user');
      setUser(null);
      navigate('/login');
   };

   return (
      <>
         <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <NavLink className="navbar-brand ps-3" to="/admin">
               Admin Panel
            </NavLink>
            <NavLink
               className="btn btn-transparent btn-sm order-1 order-lg-0 me-4 me-lg-0"
               id="sidebarToggle"
            >
               <i className="icofont-exchange"></i>
            </NavLink>
            <Form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
               <Form.Group className="input-group">
                  <Form.Control
                     className="form-control"
                     type="text"
                     placeholder="Search for..."
                     aria-label="Search for..."
                     aria-describedby="btnNavbarSearch"
                  />
                  <Button
                     className="btn btn-primary"
                     id="btnNavbarSearch"
                     type="button"
                  >
                     <i className="icofont-search"></i>
                  </Button>
               </Form.Group>
            </Form>
            <Nav className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
               <NavDropdown
                  title={<i className="icofont-ui-user"></i>}
                  id="collasible-nav-dropdown"
               >
                  <NavDropdown.Item href="/profile">
                     {user.name}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} href="/login">
                     LogOut <i className="icofont-logout"></i>
                  </NavDropdown.Item>
               </NavDropdown>
            </Nav>
         </nav>
      </>
   );
};

export default AdminNavBar;
