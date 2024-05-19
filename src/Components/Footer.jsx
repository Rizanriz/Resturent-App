import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='mt-5 p-4 text-black' style={{backgroundColor:"#0d0d0d"}}>
      <div style={{ height: "200px" }} className='d-flex justify-content-between'>

        <div className="" style={{ width: "400px" }}>
          <h5><i class="fa-brands fa-opencart"></i> MealMapper </h5>
          <p className='mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam velit voluptas quibusdam magni quia sequi enim, error blanditiis ipsam odit aspernatur minus alias facere exercitationem eum, hic nostrum architecto?</p>
        </div>

        <div className='d-flex gap-2 ' style={{flexDirection:"column"}}>
          <h5>Links</h5>
          <Link to={'/'}>Home Page</Link>
          <Link to={'/id/view'}>View</Link>
        </div>
        
        <div className='d-flex gap-2 ' style={{flexDirection:"column"}}>
          <h5>Guides</h5>
          <a href="#!">React</a>
          <a href="#!">React Bootstrap</a>
          <a href="#!">React router</a>
        </div>
        
        <div>
          <h5>Contact US</h5>
          <div className='d-flex gap-2'>
            <input type="text" placeholder='Enter your E-mail' className='form-control' />
            <button className='btn text-white'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-4' style={{fontSize:"25px"}}>
            <a href="#!"><i className="fa-brands fa-instagram"></i></a>
            <a href="#!"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#!"><i className="fa-brands fa-facebook"></i></a>
            <a href="#!"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#!"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <p className='d-flex justify-content-center text-light'>© 2024 Media Player. All rights reserved</p>
    </footer>
  )
}

export default Footer;
 