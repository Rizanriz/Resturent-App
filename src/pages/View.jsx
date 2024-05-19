import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

function View() {
  const { id } = useParams();
  const { allResturents } = useSelector(state => state.resturentReducer);
  const [resturant, setResturant] = useState(null);
  const [showHours, setShowHours] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    if (allResturents) {
      const foundResturant = allResturents.find(item => item.id === parseInt(id));
      setResturant(foundResturant);
    }
  }, [id, allResturents]);

  if (!resturant) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='d-flex align-items-center container' style={{ minHeight: "80vh", marginTop: "100px", backgroundColor: "#0d0d0d" }}>
        <div className='row align-items-center w-100'>
          <div className="col-lg-6">
            <img className="ms-3" height={"500px"} width={"90%"} style={{borderRadius:"20px"}}
              src={resturant.photograph} alt={resturant.name} />
          </div>
          <div className="col-lg-6 text-light">
            <h1>{resturant.name}</h1>
            <h3 className='text-danger'>{resturant.address}</h3>
            <p className='text-white'>{resturant.neighborhood}</p>
            <div className='d-flex justify-content-evenly mt-3'>
              <Button variant="success" className='bg-white text-black' onClick={() => setShowReviews(!showReviews)}>
                Review
              </Button>
              <Button variant="success" className='bg-white text-black' onClick={() => setShowHours(true)}>
                Operating hours
              </Button>
              <Modal show={showHours} onHide={() => setShowHours(false)}>
                <Modal.Header closeButton>
                  <Modal.Title className='text-success'>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    {Object.entries(resturant.operating_hours).map(([day, hours]) => (
                      <li key={day}><strong>{day}:</strong> {hours}</li>
                    ))}
                  </ul>
                </Modal.Body>
              </Modal>
            </div>
            {showReviews && (
              <div className='mt-3' style={{ maxHeight: "250px", overflowY: "auto", scrollbarWidth:"none"}}>
                <h4>Reviews</h4>
                {resturant.reviews?.length ? (
                  resturant.reviews.map((review, index) => (
                    <div key={index} className='bg-light text-dark p-2 mb-2'>
                      <p><strong>{review.name}:</strong> {review.comments}</p>
                      <p><strong>Rating:</strong> {review.rating}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
