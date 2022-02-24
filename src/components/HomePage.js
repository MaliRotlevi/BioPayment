import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Container } from "reactstrap";
import Loading from "./Loading";
import Register from "./Register";
import { Link } from "react-router-dom";
//import {LinkContainer} from "react-router-bootstrap"
import Login from './Login'

const HomePage = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="HomePage">Bio-Payment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="Register" as={Link} to={Register}>register</Nav.Link>
                            <Nav.Link href="Loading">loading</Nav.Link>
                            <NavDropdown title="personal area" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="Details">details</NavDropdown.Item>
                                <NavDropdown.Item href="History">travels-history</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="exit">exit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="auth-wrapper">
                <div className="auth-inner"><Login></Login>
                </div>
            </div>

        </>
    )

}
export default HomePage;