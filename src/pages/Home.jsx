import React, { useEffect } from 'react'
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturents } from '../redux/Slice/resturentSlice'

function Home() {

  const dispatch = useDispatch()
  const { allResturents, loading, error } = useSelector(state => state.resturentReducer)

  useEffect(() => {
    dispatch(fetchResturents())
  }, [])

  return (
    <>
      <Header insideHome={true} />
      <div style={{ minheight: "70vh", marginTop:"80px"}} className='container-fluid' >
        {loading ?
          <div className="text-center mt-5 fw-bolder">
            <Spinner animation="border" className='me-3' />  loading....
          </div>
          :
          <Row>
            {allResturents?.length > 0 ?
              allResturents?.map(item => (
                <Col className='p-2' sm={12} md={6} lg={4} xl={3}>
                  <Card style={{ width: '18rem', height:"450px" }} className='m-4' >
                    <Card.Img variant="top" height={"250px"} src={item.photograph } />
                    <Card.Body>
                      <Card.Title className='fw=bolder text-warning'>{item.name}</Card.Title>
                      <Card.Text>
                         {item.neighborhood} <br />
                         {item.address}
                      </Card.Text>
                      <div className='d-flex align-items-center justify-content-center ' style={{bottom:"30px", right:"30px", position:"absolute"}}>
                      <Button variant="danger" ><Link to={`/${item?.id}/view`} className='text-white' style={{textDecoration:"none"}}>
                        View..</Link></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
              :
              <div className='text-center fw-bolder mt-5 mb-5'>
                Product not found
              </div>
            }
          </Row>
        }
      </div>
    </>
  )
}

export default Home