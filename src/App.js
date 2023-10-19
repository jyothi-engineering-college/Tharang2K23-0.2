import { React ,Fragment, useState, useEffect } from "react";

import PreLoader from "./pages/PreLoader/PreLoader";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
// import Gallery from "./components/Gallery/Gallery";
import GoldSponsor from "./components/Ambassadar/GoldSponsor";
// import Alumni from "./components/Alumni/Alumni";
import ContactUs from "./components/ContactUs/ContactUs";
import SilverSponsor from "./components/Ambassadar/SilverSponsor";
import PlatinumSponsor from "./components/Ambassadar/PlatinumSponsor";


function App() {
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setPreloader(true);
  }, []);


  return (
    <Fragment>
     {preloader && <PreLoader />}
      
      <Hero />
      {/* <PlatinumSponsor /> */}

      <About />
      {/* <GoldSponsor /> */}

      <Events />
      {/* <Gallery /> */}
      {/* <Alumni /> */}
      <SilverSponsor />

      <ContactUs />
    </Fragment>
  );
}

export default App;
