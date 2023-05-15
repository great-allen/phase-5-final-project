import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { resetAddress } from "./redux/addressReducer";
import { useDispatch } from "react-redux";
import { resetCarts } from "./redux/cartReducer";
function NavBar({ user, setUser,isAdmin, setIsAdmin,searchProducts,setSearchProducts,setSelect,select,filterSearch }) {
  const products = useSelector((state) => state.cart.products);
  const dispatch=useDispatch()
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // dispatch(resetCarts())
        // dispatch(resetAddress());
        localStorage.clear();
        setUser(null)
        window.location.href = "/";

      }
    });
  }
  

  function handleAdminClick() {
    setIsAdmin(true);
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    setSelect('')
   filterSearch()
    // history.push('/AllGames');
  };
  const handleInputChange = (event) => {
    // Reset select if the user starts typing
    // setSelect('');
    // Update searchProducts state with new input value
    setSearchProducts(event.target.value);
  };

  const handleClick=()=>{
    setSearchProducts('')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Nav.Link as={Link} to="/">
        <Navbar.Brand style={{color:"#FA7921"}}>
          Game World
          </Navbar.Brand>
          </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px',marginLeft:"10%" }}
            navbarScroll
          >
            
            
            
             {isAdmin ? (<>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Admin"></Nav.Link>
              <Nav.Link as={Link} to="/Games">Games</Nav.Link>
              <Nav.Link as={Link} to="/Users">Users</Nav.Link>
              <Nav.Link as={Link} to="/Orders">Orders</Nav.Link>
              <Nav.Link as={Link} to="/GamesImages">Images</Nav.Link>
            </>):(<>
              <Nav.Link as={Link} to="/" onClick={handleClick}>Home</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"  
              className="me-2"
              aria-label="Search"
              value={searchProducts}
              onChange={handleInputChange}
            />
            <Link to="/AllGames" >
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>Search</Button>
            </Link>
            {user.is_admin?'':<div  style={{display:"flex",paddingLeft:700,alignItems:"center",position:"relative"}}>
              <Link to="/ShoppingCart">
                <ShoppingCartOutlinedIcon style={{cursor: "pointer",color: "#777"}} />
              </Link>
              <span style={{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",top:-5,right:-14,backgroundColor: "#2879fe", borderRadius: "50%",color:"white",fontSize:15,width:"20px"}}>{products.length}</span>
            </div>}
            
          </Form>
            </>)}
            
          
            
          </Nav>
          
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
       
          <Navbar.Text>
            Signed in as: 
          </Navbar.Text>
          <NavDropdown title={user.username} id="basic-nav-dropdown" style={{marginRight:"30px"}}>
              <NavDropdown.Item  onClick={handleLogoutClick}>Logout</NavDropdown.Item>
              {user.is_admin?<NavDropdown.Item as={Link} to="/Admin" onClick={handleAdminClick} >Admin</NavDropdown.Item>:<NavDropdown.Item as={Link} to="/OrderHistory" >Orders</NavDropdown.Item>}
              </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

export default NavBar;
