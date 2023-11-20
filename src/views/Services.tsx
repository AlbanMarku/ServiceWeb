/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
import serviceBanner from '../assets/serviceBanner.jpg';
import rewire from '../assets/rewire.jpeg';
import '../styles/services.css';
import Accordion from 'react-bootstrap/Accordion';
import serviceImg from '../assets/service.jpg';
import Socials from '../components/Socials';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import socket from '../assets/socket.jpg';
import cooker from '../assets/cooker.jpg';
import fault from '../assets/fault.jpg';
import upgrade from '../assets/upgrade.jpg';
import eicr from '../assets/eicr.jpg';
import light from '../assets/light.jpg';

export default function Services() {
  return (
    <div className="Services">
      <div className="BannerContainer">
        <img id="Banner" src={serviceBanner} alt="services" />
      </div>
      <Socials />
      <div className="ServiceDesc">
        <h1>WHAT WE DO</h1>
        <div>
          <p>We offer a wide range of services. Look below for our most common jobs people hire us for.</p>
          <p>Don't see something you need or have any questions? Contact us!</p>
        </div>
      </div>
      <div className="ServiceArea">
        <Accordion className="AccordionArea" alwaysOpen flush>
          <Accordion.Item id="item0" eventKey="0">
            <Accordion.Header>Rewiring Services</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Rewiring Services</h1>
                <img src={rewire} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Invest in the safety and efficiency of your electrical infrastructure with our meticulous rewiring
                    solutions.
                  </p>
                  <p>
                    Whether it's a partial or full rewire, our proficient electricians prioritize the adherence to
                    rigorous UK safety standards. Your home deserves wiring that meets the highest quality, ensuring a
                    well-lit and secure environment.
                  </p>
                  <Link className="Brand" to="/form/rewire">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fault Finding</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Electrical Troubleshooting</h1>
                <img src={fault} alt="fault" />
                <div className="ServiceItemDesc">
                  <p>
                    Trust us to swiftly pinpoint and solve electrical issues with our reliable fault finding services.
                    Our expert electricians use advanced tools, sticking to the highest UK standards.
                  </p>
                  <p>
                    We're dedicated to quickly resolving problems, ensuring your electrical systems operate smoothly and
                    securely. Rely on us for straightforward and effective electrical solutions.
                  </p>
                  <Link className="Brand" to="/form/troubleshooting">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Socket Installation</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Professional Socket Installation</h1>
                <img src={socket} alt="socket" />
                <div className="ServiceItemDesc">
                  <p>
                    Upgrade your space with our expert socket installation services. Our certified electricians follow
                    UK standards to ensure safe and efficient installations.
                  </p>
                  <p>
                    Whether you need new sockets for convenience or to meet the demands of modern devices, we provide
                    reliable and compliant solutions. Trust us to enhance your electrical infrastructure with precision
                    and professionalism.
                  </p>
                  <Link className="Brand" to="/form/socket">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Cooker Setup</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Effortless Cooker Setup</h1>
                <img src={cooker} alt="cooker" />
                <div className="ServiceItemDesc">
                  <p>
                    Let us take care of your cooker installation needs with ease. Our skilled electricians, certified to
                    meet UK standards, ensure a smooth and secure installation process.
                  </p>
                  <p>
                    Whether it's a kitchen upgrade or a new cooker, count on us for dependable and compliant solutions.
                    Enjoy cooking with confidence, knowing your installation is handled with precision and care.
                  </p>
                  <Link className="Brand" to="/form/cooker">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>EICR Certificate</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Electrical Safety Certification (EICR)</h1>
                <img src={eicr} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Ensure the safety of your property with our Electrical Installation Condition Report (EICR)
                    services. Our qualified electricians conduct thorough inspections, following UK standards to provide
                    a detailed certification.
                  </p>
                  <p>
                    We prioritize your safety, offering comprehensive assessments to identify and address any potential
                    electrical issues. Trust us for transparent and compliant certification, securing the integrity of
                    your electrical installations.
                  </p>
                  <Link className="Brand" to="/form/eicr">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Electric Board upgrade </Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Electric Board Upgrade Enhanced Safety, Upgraded Efficiency</h1>
                <img src={upgrade} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Opt for peace of mind with our consumer unit replacement services. Our certified electricians,
                    committed to UK standards, replace outdated units with modern, safety-focused solutions.
                  </p>
                  <p>
                    Whether it's improving your home's electrical efficiency or ensuring compliance, trust us for a
                    seamless and compliant consumer unit upgrade. Elevate your safety standards and electrical
                    performance with our expert replacements.
                  </p>
                  <Link className="Brand" to="/form/board">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Lights</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Illuminate Your Space with Precision</h1>
                <img src={light} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Transform your surroundings with our professional lighting services. Our skilled electricians, in
                    accordance with UK standards, design and install lighting solutions tailored to your needs.
                  </p>
                  <p>
                    Whether it's creating ambiance, enhancing functionality, or embracing energy efficiency, we bring
                    brilliance to every corner. Choose us for expertly crafted lighting that elevates the atmosphere of
                    your space.
                  </p>
                  <Link className="Brand" to="/form/light">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Garden Lights and Sockets</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Enhance Your Outdoor Oasis with Lighting and Sockets</h1>
                <img src={serviceImg} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Bring your garden to life with our specialized services in garden lighting and socket installations.
                    Our certified electricians, aligning with UK standards, craft a captivating outdoor atmosphere
                    through thoughtfully designed lighting solutions.
                  </p>
                  <p>
                    Whether you seek aesthetic enchantment or practical outdoor sockets, count on us for expert
                    installations that seamlessly combine beauty and functionality in your garden retreat.
                  </p>
                  <Link className="Brand" to="/form/garden">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Shed/Garage Rewire</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Powering Up Your Workshop</h1>
                <img src={serviceImg} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Revitalize your shed or garage with our expert rewiring services. Our certified electricians,
                    adhering to UK standards, ensure a safe and efficient power supply for your workspace.
                  </p>
                  <p>
                    Whether it's for DIY projects, hobbies, or turning your garage into a functional space, trust us for
                    a seamless and compliant rewiring that brings new energy to your creative haven.
                  </p>
                  <Link className="Brand" to="/form/shed">
                    <Button variant="primary" className="BookButton">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Any Small Electrical Needs</Accordion.Header>
            <Accordion.Body>
              <div className="ServiceItem">
                <h1>Tailored Solutions for Every Need</h1>
                <img src={serviceImg} alt="service" />
                <div className="ServiceItemDesc">
                  <p>
                    Discover comprehensive solutions for your small electrical needs. Our certified electricians,
                    meeting UK standards, are equipped to address a range of minor electrical requirements.
                  </p>
                  <p>
                    Whether it's installing a new outlet, fixing a switch, or handling other small tasks, trust us for
                    reliable and precise electrical solutions. No task is too small; we ensure each detail is handled
                    with the same level of expertise and care.
                  </p>
                  <div className="CardButtons">
                    <Link className="Brand" to="/form/small-job">
                      <Button variant="primary" className="BookButton">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
