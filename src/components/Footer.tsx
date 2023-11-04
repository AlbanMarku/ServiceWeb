import visa from '../assets/Visa.png';
import mainLogo from '../assets/MainLogo.jpg';
import masterCard from '../assets/MasterCard.png';
import express from '../assets/express.png';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="CompanyIcon">
        <img id="MainLogo" src={mainLogo} alt="logo" />
      </div>
      <div className="PayIcons">
        <img className="PayIcon" src={visa} alt="Visa" />
        <img className="PayIcon" src={masterCard} alt="Visa" />
        <img className="PayIcon" src={express} alt="Visa" />
      </div>
      <div className="UsefulLinks">
        <h2>USEFUL LINKS</h2>
        <div className="Links">
          <a href="www.google.com">About us</a>
          <a href="www.google.com">Our prices</a>
          <a href="www.google.com">Contact us</a>
        </div>
      </div>
    </div>
  );
}
