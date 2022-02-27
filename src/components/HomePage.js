import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Container } from "reactstrap";
import Loading from "./Loading";
import Register from "./Register";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import { Details } from '@material-ui/icons';
import TravelsToUser  from './TravelsToUser';
import './HomePage.css';


const HomePage = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="HomePage">Bio-Payment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link><Link to="/Register">register</Link></Nav.Link>
                            <Nav.Link ><Link to="/Loading">loading</Link></Nav.Link>
                            <NavDropdown title="personal area" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><Link to="/Details">details</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/TravelsToUser">travels-history</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="exit">exit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div className="auth-wrapper">
                <div className="auth-inner"><Login></Login>
                </div>
            </div> */}
            {/* <div className="auth-wrapper">
                <div className="auth-inner"><Register></Register>
                </div>
            </div> */}


            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Loading" element={<Loading />} />
                <Route path="/TravelsToUser" element={<TravelsToUser />}/>             
                <Route path="/Details" element={<Details />} />
                {/* <Route exact path="/exit">
                    <Message
                        warning
                        header="you loged out successfully"
                        list={[
                            '',
                        ]}
                    />
                </Route> */}
                <Route exact path="" element={<Login />} />
            </Routes>
        </>
    )

}
export default HomePage;