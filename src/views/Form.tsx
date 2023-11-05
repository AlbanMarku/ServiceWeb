import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import serviceBanner from '../assets/serviceBanner.jpg';
import '../styles/form.css';

export default function Form() {
  const { service } = useParams();

  const serviceName = service || 'BOOK A';

  return (
    <div className="Form">
      <div className="BannerContainer">
        <img id="Banner" src={serviceBanner} alt="services" />
      </div>
      <div className="FormArea">
        <h1>{serviceName.toUpperCase()} SERVICE</h1>
        <BookForm service={serviceName} />
      </div>
    </div>
  );
}
