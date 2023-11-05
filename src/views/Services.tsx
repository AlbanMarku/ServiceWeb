/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
import serviceBanner from '../assets/serviceBanner.jpg';
import '../styles/services.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import serviceImg from '../assets/service.jpg';
import { CardGroup } from 'react-bootstrap';
import Socials from '../components/Socials';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="Services">
      <div className="BannerContainer">
        <img id="Banner" src={serviceBanner} alt="services" />
      </div>
      <Socials />
      <div className="ServiceDesc">
        <h1>WHAT WE DO</h1>
        <p>
          We do many things here like stuff like this and that fixing things and what not so look below for more
          information
        </p>
      </div>
      <div className="ServiceArea">
        <Accordion className="AccordionArea" alwaysOpen flush>
          <Accordion.Item id="item0" eventKey="0">
            <Accordion.Header>Faults</Accordion.Header>
            <Accordion.Body>
              <CardGroup className="CardGroup">
                <Card className="Card">
                  <Card.Img variant="top" src={serviceImg} />
                  <Card.Body>
                    <Card.Title>Fault Fixing</Card.Title>
                    <div className="PriceArea">
                      <p>£30-£50</p>
                    </div>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A totam enim facere inventore reiciendis
                      ad cumque facilis libero tenetur illum? Corrupti eligendi repellendus, iusto earum voluptatibus
                      asperiores maiores et quae provident. Aliquam voluptatibus reprehenderit nam aspernatur, maxime
                      eum tempore aperiam.
                    </Card.Text>
                    <div className="CardButtons">
                      <Link className="Brand" to="/form/faulty">
                        <Button variant="primary" className="BookButton">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="Card">
                  <Card.Img variant="top" src={serviceImg} />
                  <Card.Body>
                    <Card.Title>Fault Finding</Card.Title>
                    <div className="PriceArea">
                      <p>£30-£50</p>
                    </div>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A totam enim facere inventore reiciendis
                      ad cumque facilis libero tenetur illum? Corrupti eligendi repellendus, iusto earum voluptatibus
                      asperiores maiores et quae provident. Aliquam voluptatibus reprehenderit nam aspernatur, maxime
                      eum tempore aperiam.
                    </Card.Text>
                    <div className="CardButtons">
                      <Link className="Brand" to="/form/faulty">
                        <Button variant="primary" className="BookButton">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Installation</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Rewire</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Lights</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Certificate</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Small jobs</Accordion.Header>
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
