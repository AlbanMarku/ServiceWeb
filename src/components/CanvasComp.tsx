import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMyContext } from '../context';
import '../styles/canvasComp.css';
import plumbing from '../assets/plumbing.png';

export default function CanvasComp() {
  const [show, setShow] = useState(false);
  const { renderedComp, setRenderedComp } = useMyContext();
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    setTimeout(() => {
      if (!renderedComp) {
        setShow(true);
        setRenderedComp(true);
      }
    }, 4000);
  }, [renderedComp, setRenderedComp]);

  return (
    <div className="CanvasComp">
      <Offcanvas show={show} onHide={handleToggle}>
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
