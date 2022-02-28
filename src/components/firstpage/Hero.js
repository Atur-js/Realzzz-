import React from 'react';
import Heroo from "../../assets/icons/hero.png";
import "./Hero.css";
import Eye from "../../assets/icons/eye1.jpg";
import Face from "../../assets/icons/eye2.jpg";
import Lipstick from "../../assets/icons/Lipstick.jpg";
import { Link } from 'react-router-dom';
import Footer from './Footer';



const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <img alt="hero" className="hero_image"  src={Heroo} />
      </div>
      <div className="des">
        <div className="welcome">
          <p
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "black",
              fontSize: "2.5vw",
            }}
          >
            Welcome to Realz
          </p>
          <p style={{ color: "black" }}>
            The Realz makeup shop is known for high-quality decorative
            cosmetics, caring beauty products, perfumes, niche fragrances and
            beauty accessories. Successful brands, trend products and small
            natural cosmetics labels from all over the world offer exciting
            inspiration for the daily beauty ritual.From our unique color
            palettes to our love and passion for makeup we take your makeup
            experience to a new level. ENJOY!
          </p>
        </div>
      </div>
      <div className="category">
        <div className="category_main">
          <p style={{marginTop:"20px"}}>New products</p>
          <p>Explore our unbelievable range of makeup essentials.</p>
          <div className="category_image">
            <div className="eye">
              <p style={{ textAlign: "center" }}>Eyeshadow</p>
              <div className="badge1">
                <p>
                  <Link style={{ textDecoration: "none" }} to="/eyeshadow">
                    SHOP
                  </Link>
                </p>
              </div>
              <img alt="shopNow" className="eyeImg" src={Eye} />
            </div>
            <div className="face">
              <p style={{ textAlign: "center" }}>Eyebrow</p>
              <div className="badge2">
                <p>
                  <Link style={{ textDecoration: "none" }} to="/eyebrow">
                    SHOP
                  </Link>
                </p>
              </div>
              <img alt="shopNow" src={Face} />
            </div>
            <div className="brush">
              <p>Lipstick</p>
              <div className="badge3">
                <p>
                  <Link style={{ textDecoration: "none" }} to="/lipstick">
                    SHOP
                  </Link>
                </p>
              </div>
              <img alt="shopNow" src={Lipstick} />
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Hero;