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
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img src={Work1} alt="Example one" className="custom-carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Work2} alt="Example two" className="custom-carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Work3} alt="Example three" className="custom-carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Work4} alt="Example four" className="custom-carousel-image" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
