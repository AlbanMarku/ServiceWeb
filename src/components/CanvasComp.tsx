import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/canvasComp.css';
import { Button } from 'react-bootstrap';
import plumbing from '../assets/plumbing.png';

export default function CanvasComp() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="CanvasComp">
      <Offcanvas placement="start" show={show} onHide={handleToggle}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <h1>PLUMBING SERVICE NOW AVAILABLE!</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <img src={plumbing} alt="plumbing service" />
          <Button className="CardButtons">View More</Button>
          <Button className="CardButtons" onClick={handleToggle}>
            Close
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
