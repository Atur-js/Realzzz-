import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#ff87e9", textAlign: "center", marginTop: "-50px",fontSize: "2vw" }}>
        Realzzz
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading style={{ fontSize: "1.8vw",color:"#cbdf1e" }}>About Us</Heading>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              Contact Us
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              Our Company
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              Careers
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              Investors
            </FooterLink>
          </Column>
          <Column style={{ alignItems: "center" }}>
            <Heading style={{ fontSize: "1.8vw",color:"#cbdf1e" }}>Services</Heading>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              help & FAQs
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              delivery
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              product recall
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              returns
            </FooterLink>
          </Column>
          <Column>
            <Heading style={{ fontSize: "1.8vw",color:"#cbdf1e" }}>Store</Heading>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              Find a Store
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              Virtual Store Tour
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              List of Brands
            </FooterLink>
          </Column>
          <Column style={{ alignItems: "center" }}>
            <Heading style={{ fontSize: "1.8vw",color:"#cbdf1e" }}>Social Media</Heading>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              <i className="fab fa-facebook-f"></i>
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              <i className="fab fa-instagram"></i>
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              <i className="fab fa-twitter"></i>
            </FooterLink>
            <FooterLink style={{ fontSize: "1.5vw" }} href="#">
              <i className="fab fa-youtube"></i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p style={{ fontSize: "1.3vw", color: "white", marginTop:"10px" }}>
        ©<a href="https://github.com/Atur-js" style={{ textDecoration:"none",color:"yellow" }}>Atur-js</a>. All Rights Reserved.
      </p>
    </Box>
  );
};
export default Footer;
