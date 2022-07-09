import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="bg-footer mt-5">
      <Container className="py-4 text-center text-light">
        <p className="m-0">Copyright &copy; iShop 2022</p>
      </Container>
    </div>
  );
};

export default Footer;
