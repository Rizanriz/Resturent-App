import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='mt-5 p-4 text-black' style={{ backgroundColor: "#0d0d0d" }}>
      <div style={{ minHeight: "200px" }} >
        <div className='row'>

          <div className="col-lg-4">
            <div className="mt-3" style={{ width: "100%" }}>
              <h5><i class="fa-brands fa-opencart"></i> MealMapper </h5>
              <p className='mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam velit voluptas quibusdam magni quia sequi enim, error blanditiis ipsam odit aspernatur minus alias facere exercitationem eum, hic nostrum architecto?</p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className='d-flex gap-2 mt-3' style={{ flexDirection: "column" }}>
              <h5>Links</h5>
              <Link to={'/'}>Home Page</Link>
              <Link to={'/id/view'}>View</Link>
            </div>
          </div>

          <div className="col-lg-2">
            <div className='d-flex gap-2 mt-3' style={{ flexDirection: "column" }}>
              <h5>Guides</h5>
              <a href="#!">React</a>
              <a href="#!">React Bootstrap</a>
              <a href="#!">React router</a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className='mt-3'>
              <h5>Contact US</h5>
              <div className='d-flex gap-2'>
                <input type="text" placeholder='Enter your E-mail' className='form-control' />
                <button className='btn text-white'><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className='d-flex justify-content-between mt-4' style={{ fontSize: "25px" }}>
                <a href="#!"><i className="fa-brands fa-instagram"></i></a>
                <a href="#!"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#!"><i className="fa-brands fa-facebook"></i></a>
                <a href="#!"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#!"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <p className='d-flex justify-content-center text-light mt-3'>© 2024 Media Player. All rights reserved</p>
    </footer>
  )
}

export default Footer;
