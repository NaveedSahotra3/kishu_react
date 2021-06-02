import React, { useEffect, useState, useRef } from "react";

import EllipseImage from "./images/Ellipse-1-copy-7.png";
import Shape8 from "./images/Shape-8-copy.png";
import "./components/moonmap.css";
import WhyKishu from "./components/whyKishu";
import V1big from "./images/v1big.gif";
import V1BigBackground from "./images/instant-rewards---background-no-kishu.png";
import ShiningStart from "./images/shining-stars-.png";
import AOS from "aos";
import "aos/dist/aos.css";

import ScreenShot from "./images/screnshot.png";

import LoadingScreen from "./components/loadingScreen";

// import ScrollAnimation from "react-animate-on-scroll";
import Home from "./components/home";
import HowToBuy from "./components/howToBuy";
import Tokenomics from "./components/Tokenomis";
import KishuSwap from "./components/KishuSwap";
import MoonMap from "./components/MoonMap";
import FoundingTeam from "./components/foundingTeam";
import Donating from "./components/donating";
import Footer from "./components/Footer";
// import "animate.css/animate.min.css";
// const url = (name, wrap ) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const url = ScreenShot;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);

  // const changeTheText = () => {
  //   console.log("fffff");
  // };

  const [animation, setAnimation] = useState(false);
  // const [animation2, setAnimation2] = useState(false);

  // const parallax = useRef(null);
  return (
    <div className="">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
        
          <div
            data-w-id="c16aa2e5-b43d-c2cf-7dba-44198f5f82bf"
            class="google-translator-2"
          >
            <div class="html-embed w-embed">
              <div id="google_translate_element"></div>
            </div>
          </div>
          <div
            data-w-id="52e8b043-e2cb-1d7c-5a6f-3c81d4b9a9f2"
            class="page-load-wrapper"
          >
            <img
              src="images/06-small.gif"
              loading="lazy"
              alt=""
              class="image-23"
            />
          </div>
          <div
            data-w-id="e3673c46-df59-1f99-93e3-043bb54261e5"
            class="back-to-top"
          >
            <a href="#home" class="capitals nav-link is--back-to-top">
              BACK TO TOP
            </a>
          </div>

          <Home />
          <WhyKishu />

          <HowToBuy />

          <Tokenomics />

          <KishuSwap />

          <MoonMap />
          {/* <div></div> */}
          <FoundingTeam />

          <Donating />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
