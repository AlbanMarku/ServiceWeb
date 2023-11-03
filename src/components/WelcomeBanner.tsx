import welcomeImg from '../assets/welcome.jpg';
import emergency from '../assets/emergency.png';
import '../styles/welcomeBanner.css';

export default function WelcomeBanner() {
  return (
    <div className="image-outer-container">
      <div className="image-inner-container">
        <img src={welcomeImg} alt="Logo" className="cover-image" />
        <button id="But" type="button">
          <img id="Contact" src={emergency} alt="emergency contact" />
          <p>Emergency Contact</p>
        </button>
      </div>
    </div>
  );
}
