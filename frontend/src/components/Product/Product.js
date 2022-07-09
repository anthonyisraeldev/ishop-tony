import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { FiEye } from "react-icons/fi";
import "./Product.scss";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded cart-product">
      <div className="cart-product__box-image">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            className="cart-product__image"
          />
        </Link>
        <Link
          to={`/product/${product._id}`}
          className="cart-product__show-more"
        >
          <FiEye />
        </Link>
      </div>
      {product.offer && (
        <Card.Title as="div" className="cart-product__offer">
          <strong>Sale</strong>
        </Card.Title>
      )}
      <Card.Body className="cart-product__descrition-box">
        <Link to={`/product/${product._id}`} alt={product.name}>
          <Card.Title as="div">
            <strong className="cart-product__title">
              {product.name.substring(0, 25)}...
            </strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="div">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>
      <Card.Text as="h3" className="cart-product__price">
        ${product.price}
      </Card.Text>
    </Card>
  );
};

export default Product;
