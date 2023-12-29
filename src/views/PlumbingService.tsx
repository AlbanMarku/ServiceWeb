/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
import { Fab } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa6';
import serviceBanner from '../assets/plumbing.png';
import '../styles/services.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Socials from '../components/Socials';
import boiler from '../assets/boiler.jpg';
import cylinder from '../assets/cylinder.jpg';
import heating from '../assets/heating.jpg';
import flushing from '../assets/flushing.jpg';
import plumbing from '../assets/plumbing.jpg';
import leak from '../assets/leak.jpg';
import blockage from '../assets/blockage.jpg';

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
            <Accordion.Header>Boiler Services</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Boiler Services</h1>
                <img src={boiler} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing boiler service.</p>
                  <Link className="Brand" to="/form/boiler">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item id="item0" eventKey="1">
            <Accordion.Header>Cylinder Services</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Cylinder Services </h1>
                <img src={cylinder} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing cylinder service.</p>
                  <Link className="Brand" to="/form/cylinder">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item id="item0" eventKey="2">
            <Accordion.Header>Heating Services</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Heating Services</h1>
                <img src={heating} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing heating service.</p>
                  <Link className="Brand" to="/form/heating">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item id="item0" eventKey="3">
            <Accordion.Header>Flushing Heating</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Flushing Heating</h1>
                <img src={flushing} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing flushing service.</p>
                  <Link className="Brand" to="/form/flushing">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item id="item0" eventKey="4">
            <Accordion.Header>Plumbing Maintenance</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Plumbing Maintenance</h1>
                <img src={plumbing} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing plumbing service.</p>
                  <Link className="Brand" to="/form/plumbing">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item id="item0" eventKey="5">
            <Accordion.Header>Leak Founding</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Leak Founding</h1>
                <img src={leak} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing leak service.</p>
                  <Link className="Brand" to="/form/leak">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item id="item0" eventKey="6">
            <Accordion.Header>Blockage</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Blockage</h1>
                <img src={blockage} alt="service" />
                <div className="ServiceItemDesc">
                  <p>Amazing blockage service.</p>
                  <Link className="Brand" to="/form/blockage">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Fab className="chat-icon" color="primary" aria-label="add">
          <a className="chat-inner" href="https://wa.me/message/JVQ7EOQN4QRQH1" target="_blank" rel="noreferrer">
            <FaWhatsapp color="white" size={25} />
          </a>
        </Fab>
      </div>
    </div>
  );
}
