import serviceBanner from '../assets/serviceBanner.jpg';
import '../styles/services.css';

export default function Services() {
  return (
    <div className="Services">
      <div className="BannerContainer">
        <img id="Banner" src={serviceBanner} alt="services" />
      </div>
    </div>
  );
}
