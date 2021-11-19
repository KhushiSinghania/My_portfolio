import React from 'react'
import './Education.css'
import { Card,Button } from 'react-bootstrap'
const Education = () => {
  return (
    <div Classname="Container">
    <div className="row ">
       <div className="col-lg-4 col-sm-12 EducationCard " data-aos="flip-up" >
       
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="portfolio-background.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
<div className="col-lg-4 col-sm-12 EducationCard" data-aos="flip-up">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="portfolio-background.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
<div className="col-lg-4 col-sm-12 EducationCard"  data-aos="flip-up">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="portfolio-background.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</div>
    </div>
    </div>
  )
}

export default Education
