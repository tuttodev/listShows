import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { getCurrentUser, logOut } from '../common/helpers';

const NavbarComponent = () => {
    const history = useHistory();

    const currentUser = getCurrentUser();

    const navLinks = () => {
        if(currentUser !== null){
            return (
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => logOut(history)}>LogOut</Nav.Link>
                </Nav>
            )
        }else {
            return (
                <Nav className="mr-auto">
                    <Link to='/signup' className='nav-link'>Registrate</Link>
                    <Link to='/signin' className='nav-link'>Iniciar Sesión</Link>
                </Nav>
            )
        }
    } 

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>ListShow</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navLinks()}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavbarComponent;