import WelcomeBanner from '../components/WelcomeBanner';
import ServiceBox from '../components/ServiceBox';
import OurWork from '../components/OurWork';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <div className="Home">
      <WelcomeBanner />
      <Socials />
      <ServiceBox />
      <OurWork />
    </div>
  );
}
