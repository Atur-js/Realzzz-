import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
// Icons
import shopIcon from "../../assets/icons/shop.svg";
import Logo from "../../assets/icons/logo.png";
import ProductsData from "./ProductsData.json";


// Style
import "./Navbar.css";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  const [scrolled, setScrolled] = React.useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }
  return (
    <header className={x.join(" ")}>
      <div className="mainContainer">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="navigation">
          <div className="upperNav">
            {/* <button className="search"> */}
              <SearchBar
                style={{ marginRight: "400px" }}
                placeholder="Search ..."
                data={ProductsData}/>
            {/* </button> */}
            <div className="iconContainer">
              <Link to="/cart">
                <img src={shopIcon} alt="shopicon" />
              </Link>
              <span>{state.itemsCounter}</span>
            </div>
          </div>

          <button onClick={toggleNav} className="btn">
            Products
          </button>
          {(toggleMenu || screenWidth > 1069) && (
            <ul className="list">
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/hero"
              >
                Home
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/products"
              >
                Products
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/blush"
              >
                Blush
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/bronzer"
              >
                Bronzer
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/eyebrow"
              >
                Eyebrow
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/eyeliner"
              >
                Eyeliner
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/eyeshadow"
              >
                Eyeshadow
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/lipliner"
              >
                Lip liner
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/lipstick"
              >
                Lipstick
              </Link>
              <Link
                className="items"
                style={{ textDecoration: "none" }}
                to="/mascara"
              >
                Mascara
              </Link>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
