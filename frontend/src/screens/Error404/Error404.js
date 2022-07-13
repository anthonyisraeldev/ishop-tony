import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import notFound from "../../assets/404.svg";
import "./Error404.scss";

const Error404 = () => {
  return (
    <div>
      <div className="content-box content-not-found">
        <h2 className="main-title">Oops!</h2>
        <p className="text-description">La página que busca no se encuentra</p>
        <img src={notFound} className="img-notfound" alt="404 Page not found" />
        <Link to="/" className="btn btn-primary" title="Ir a inicio">
          Ir a inicio <FaHome />
        </Link>
      </div>
    </div>
  );
};
Error404.displayName = "Error404";

export default Error404;
