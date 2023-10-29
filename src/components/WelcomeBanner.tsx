import welcomeImg from '../assets/welcome.jpg';
import '../styles/welcomeBanner.css';

export default function WelcomeBanner() {
  return (
    <div className="image-outer-container">
      <div className="image-inner-container">
        <img src={welcomeImg} alt="Logo" className="cover-image" />
      </div>
    </div>
  );
}
