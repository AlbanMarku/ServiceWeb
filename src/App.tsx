/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComp from './components/NavComp';
import WelcomeBanner from './components/WelcomeBanner';
import ServiceBox from './components/ServiceBox';

// TODO component up the cards

function App() {
  return (
    <div className="App">
      <NavComp />
      <WelcomeBanner />
      <ServiceBox />
    </div>
  );
}

export default App;
