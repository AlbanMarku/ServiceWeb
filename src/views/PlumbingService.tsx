/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
import serviceBanner from '../assets/plumbing.png';
import '../styles/services.css';
import Accordion from 'react-bootstrap/Accordion';
import serviceImg from '../assets/service.jpg';
import Socials from '../components/Socials';
import CardComp from '../components/CardComp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function PlumbingService() {
  return (
    <div className="Services">
      <div className="BannerContainer">
        <img id="Banner" src={serviceBanner} alt="services" />
      </div>
      <Socials />
      <div className="ServiceDesc">
        <h1>B&C PLUMBING SERVICE</h1>
        <div>
          <p>We offer a wide range of services. Look below for our most common jobs people hire us for.</p>
          <p>Don't see something you need or have any questions? Contact us!</p>
        </div>
      </div>
      <div className="ServiceArea">
        <Accordion className="AccordionArea" alwaysOpen flush>
          <Accordion.Item id="item0" eventKey="0">
            <Accordion.Header>Installation</Accordion.Header>
            <Accordion.Body>
              <Row xs={1} md={2} className="g-4 CardGroup">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col className='d-flex justify-content-center align-items-center"' key={idx}>
                    <CardComp title="example" price="£30-£40" desc="lorem15" img={serviceImg} />
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Gas Pipe Repair</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Maintenance</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>De-clogging</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Emergency Callout</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
