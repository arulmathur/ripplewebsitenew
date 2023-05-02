import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Projects } from "./components/Projects";
import Map from "./components/Map";
import { Matters } from "./components/Matters";
import { Team } from "./components/Team";
import Ticker from "./components/Ticker"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
      <Projects />
      <Map />
      <Matters />
      <Team />
      <Ticker />
    </div>
  );
}

export default App;
