import '../styles/ourWork.css';
import Carousel from 'react-bootstrap/Carousel';
import Work1 from '../assets/work1.jpg';
import Work2 from '../assets/work2.jpg';
import Work3 from '../assets/work3.jpg';
import Work4 from '../assets/work4.jpg';

export default function OurWork() {
  return (
    <div className="OurWork">
      <h1>OUR WORK</h1>
      <div className="CarousalContainer">
        <Carousel className="custom-carousel" fade indicators={false} interval={2500}>
          <Carousel.Item>
            <div className="custom-carousel-image-container">
              <img src={Work1} alt="Example one" className="custom-carousel-image" />
              <div className="image-overlay">
                <p>Rewire</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="custom-carousel-image-container">
              <img src={Work2} alt="Example one" className="custom-carousel-image" />
              <div className="image-overlay">
                <p>Professional Service</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="custom-carousel-image-container">
              <img src={Work3} alt="Example one" className="custom-carousel-image" />
              <div className="image-overlay">
                <p>Fault Fixing</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="custom-carousel-image-container">
              <img src={Work4} alt="Example one" className="custom-carousel-image" />
              <div className="image-overlay">
                <p>Lights Installation</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
