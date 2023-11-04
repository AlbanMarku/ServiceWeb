import WelcomeBanner from '../components/WelcomeBanner';
import ServiceBox from '../components/ServiceBox';
import OurWork from '../components/OurWork';
import Socials from '../components/Socials';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className="Home">
      <WelcomeBanner />
      <Socials />
      <AboutUs />
      <ServiceBox />
      <OurWork />
    </div>
  );
}
