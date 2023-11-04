/* eslint-disable import/no-extraneous-dependencies */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styles/serviceBox.css';
import { useNavigate } from 'react-router-dom';
import serviceImg from '../assets/service.jpg';
// import AD from '../assets/ad1.jpg';

export default function ServiceBox() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/services`;
    navigate(path);
  };
  return (
    <div className="ServiceBox">
      <h1>SERVICES</h1>
      <CardGroup className="CardArea">
        <Card className="Card">
          <Card.Img variant="top" src={serviceImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </Card.Text>
            <Button variant="primary" className="bookButton">
              Book now
            </Button>
          </Card.Body>
        </Card>
        <Card className="Card" style={{ marginBottom: 0 }}>
          <Card.Img variant="top" src={serviceImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </Card.Text>
            <Button variant="primary" className="bookButton">
              Book now
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>

      <div className="ReadMoreArea d-grid ">
        <Button onClick={routeChange} variant="primary" size="lg">
          More Services
        </Button>
      </div>
    </div>
  );
}
