/* eslint-disable import/no-extraneous-dependencies */
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styles/serviceBox.css';
import { useNavigate } from 'react-router-dom';
import serviceImg from '../assets/service.jpg';
import CardComp from './CardComp';
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
      <div className="CardSection">
        <CardGroup className="CardArea">
          <CardComp img={serviceImg} title="service" price="£30-£40" desc="here is a service" />
          <CardComp img={serviceImg} title="service" price="£30-£40" desc="here is a service" />
          <CardComp img={serviceImg} title="service" price="£30-£40" desc="here is a service" />
        </CardGroup>
        <div className="ReadMoreArea ">
          <Button onClick={routeChange} variant="primary" size="lg">
            More Services
          </Button>
        </div>
      </div>
    </div>
  );
}
