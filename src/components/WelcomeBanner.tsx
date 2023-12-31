import Carousel from 'react-bootstrap/Carousel';
import welcomeImg from '../assets/welcome.jpg';
import emergency from '../assets/emergency.png';
import slide2 from '../assets/testBanner.jpeg';
import slide3 from '../assets/ad2.jpg';
import '../styles/welcomeBanner.css';

export default function WelcomeBanner() {
  return (
    <div className="image-outer-container">
      <Carousel fade controls={false} indicators={false} wrap interval={2500}>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img src={welcomeImg} alt="Welcome" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img id="Slide2" src={slide2} alt="Work 1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img src={slide3} alt="Work 2" />
          </div>
        </Carousel.Item>
      </Carousel>
      <button id="But" type="button">
        <img id="Contact" src={emergency} alt="emergency contact" />
        <div className="Emergency">
          <a href="tel:07400589645">
            <p>EMERGENCY</p>
            <p>CONTACT</p>
          </a>
        </div>
      </button>
    </div>
  );
}
