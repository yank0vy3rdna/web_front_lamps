import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import {logout} from "../../services/Login";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Lamps Control</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Map</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/grafana/">Plots</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/controls/" disabled>Controls</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/yank0vy3rdna/LampsControl">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about/" disabled>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button outline color="secondary" onClick={logout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
