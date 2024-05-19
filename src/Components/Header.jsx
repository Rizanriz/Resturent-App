import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchResturant } from '../redux/Slice/resturentSlice';

function Header({insideHome}) {

    const dispatch = useDispatch(

    )
    return (
        <div>
            <Navbar bg="warning" data-bs-theme="light" style={{zIndex:"10", position:"fixed",top:"0", width:"100%", padding:"15px"}} >
                <Container>
                    <Navbar.Brand href="#home"><Link to={'/'} className='fw-bolder' style={{textDecoration:"none", color:"black", fontSize:"25px"}}>
                    <i className="fa-brands fa-opencart me-2"></i> MealMapper</Link></Navbar.Brand>
                    {/* <Nav className="m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> */}
                    { insideHome &&
                    <div>
                        <input onChange={e=>dispatch(searchResturant(e.target.value.toLowerCase()))} type="text" placeholder='Search by location' className='rounded' style={{width:"400px",height:"40px", padding:"5px", border:"none", outline:"none"}} />
                    </div>}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header