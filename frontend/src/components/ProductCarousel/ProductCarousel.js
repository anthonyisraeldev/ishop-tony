import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { listTopProducts } from "../../actions/productActions";
import "./ProductCarousel.scss";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="mb-5 carousel-bg" variant="dark">
      {products.map((product) => (
        <Carousel.Item key={product._id} className="carousel-bg">
          <div className="container">
            <div className="row carousel-box">
              <div className="col-12 col-md-6">
                <h2 className="carousel-box__title">{product.name}</h2>
                <Link
                  className="carousel-box__btn-show-more shadow"
                  to={`/product/${product._id}`}
                >
                  Show more
                </Link>
              </div>
              <div className="col-12 col-md-6">
                <Image
                  className="carousel-box__image"
                  src={product.image}
                  alt={product.name}
                  fluid
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
