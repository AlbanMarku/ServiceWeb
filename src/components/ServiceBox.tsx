/* eslint-disable import/no-extraneous-dependencies */
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styles/serviceBox.css';
import { useNavigate } from 'react-router-dom';
import CardComp from './CardComp';
import cooker from '../assets/cooker.jpg';
import light from '../assets/upgrade.jpg';
import rewire from '../assets/fault.jpg';
// import AD from '../assets/ad1.jpg';

export default function ServiceBox() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/services`;
    navigate(path);
  };
  return (
    <div className="ServiceBox">
      <h1>POPULAR SERVICES</h1>
      <div className="CardSection">
        <CardGroup className="CardArea">
          <CardComp
            img={cooker}
            title="Cooker Setup"
            price="Negotiable"
            desc="Let us take care of your cooker installation needs with ease. Our skilled electricians, certified to meet UK standards, ensure a smooth and secure installation process."
          />
          <CardComp
            img={light}
            title="Lights"
            price="Negotiable"
            desc="Transform your surroundings with our professional lighting services. Our skilled electricians, in accordance with UK standards, design and install lighting solutions tailored to your needs."
          />
          <CardComp
            img={rewire}
            title="Shed/Garage Rewire"
            price="Negotiable"
            desc="Revitalize your shed or garage with our expert rewiring services. Our certified electricians, adhering to UK standards, ensure a safe and efficient power supply for your workspace."
          />
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
