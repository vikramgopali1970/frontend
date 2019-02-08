import React from 'react';
// import Search from '../Search/Search';
import NavButton from '../NavButtons/NavButtons';
import {Navbar, Nav } from 'react-bootstrap';



const Header = ()=>(
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Company</Navbar.Brand>
        <Nav className="mr-auto">
            <NavButton Name="Features"/>
            <NavButton Name="Pricing"/>
        </Nav>
        <Nav>
            <NavButton Name="Login" Link="/login"/>
            <NavButton Name="Register"/>
        </Nav>

    </Navbar>
);

export default Header;