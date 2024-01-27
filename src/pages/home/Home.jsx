import React from "react";
import "./Home.css";
import Product from "../../component/product/Product";
import Header from "../../component/header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3B_PC_NTA_Hero_C4_ET_2x._CB574339486_.jpg"
          alt="hero image"
        />
      </div>

      <div className="home__row">
        <Product
          id={1}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback] Ries, Eric"
          price={19.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81vvgZqCskL._SY522_.jpg"
        />

        <Product
          id={2}
          title="Realme Narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display"
          price={45.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={3}
          title="Fire-Boltt Ninja Call Pro Smart Watch Dual Chip Bluetooth Calling, 1.69 Display, AI Voice Assistance with 100 Sports Modes, with SpO2 & Heart Rate Monitoring"
          price={25.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61oatFNX4BL._SX679_.jpg"
        />
        <Product
          id={4}
          title="boAt Airdopes 141 Neo True Wireless Earbuds with 50 hrs Playback, Beast™ Mode, IWP™ Tech, Signature Sound, Quad Mics with ENx™, ASAP™ Charge, USB Type-C Port & IPX5(Midnight Black)"
          price={20.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ZsKY4uwrL._SX679_.jpg"
        />
        <Product
          id={5}
          title="INALSA Air Fryer Digital Tasty Fry-1400W 4.2L,Smart Aircrisp Technology| 8-Preset, Touch Control & Digital Display| Variable Temp& Timer Control,(Black), 4.2 Liter"
          price={52.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61yk1RpaPEL._SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={6}
          title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)"
          price={168.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71RxCmvnrbL._SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
