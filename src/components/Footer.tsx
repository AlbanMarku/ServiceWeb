import { Link } from 'react-router-dom';
import visa from '../assets/Visa.png';
import mainLogo from '../assets/MainLogo.jpg';
import masterCard from '../assets/MasterCard.png';
import express from '../assets/express.png';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="CompanyIcon">
        <a href="#NavComp">
          <img id="MainLogo" src={mainLogo} alt="logo" />
        </a>
      </div>
      <div className="PayIcons">
        <img className="PayIcon" src={visa} alt="Visa" />
        <img className="PayIcon" src={masterCard} alt="Visa" />
        <img className="PayIcon" src={express} alt="Visa" />
      </div>
      <div className="UsefulLinks">
        <h2>USEFUL LINKS</h2>
        <div className="Links">
          <a href="#AboutUs">About us</a>
          <Link to="/services">Our Prices</Link>
          <a href="#ContactUs">Contact us</a>
        </div>
      </div>
    </div>
  );
}
