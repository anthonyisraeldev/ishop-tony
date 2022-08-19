import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
import Rating from "../../components/Rating";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  listProductDetails,
  createProductReview,
} from "../../actions/productActions";
import {
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_DETAILS_RESET,
} from "../../constants/productConstants";
import Meta from "../../components/Meta";
import { BsArrowLeft } from "react-icons/bs";
import "./ProductScreen.scss";
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch(listProductDetails(match.params.id));
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview, product._id]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };
  const handleCleanDetails = () => {
    dispatch(PRODUCT_DETAILS_RESET);
  };

  return (
    <>
      <Link
        className="btn btn-light my-3"
        to="/"
        onClick={() => handleCleanDetails()}
      >
        <BsArrowLeft /> Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={6} className="position-relative mb-4">
              <div className="bg-product-image">
                <Image
                  className="product__image"
                  src={product.image}
                  alt={product.name}
                  fluid
                />
                {product.offer && (
                  <strong className="product__offer">Sale</strong>
                )}
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="product">
                <h2 className="product__title">{product.name} </h2>
                <div className="mb-0">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                <h3 className="product__price mb-5">${product.price}</h3>
                <p className="product__availability">
                  Available:
                  {product.countInStock > 0 ? (
                    <span className="product__inStock mt-3">In Stock</span>
                  ) : (
                    <span className="product__OutStock mt-3">Out Of Stock</span>
                  )}{" "}
                </p>

                <p className="product__description pb-4">
                  {product.description}
                </p>

                {product.countInStock > 0 ? (
                  <div className="row align-items-center">
                    {/* <div className="col-2 col-md-2 col-lg-1">Qty </div> */}
                    <div className="col-4 col-md-5 col-lg-3">
                      <Form.Control
                        className="text-center py-3"
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                    <div className="col-8 col-lg-5 mt-lg-0">
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block py-3"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2 className="mt-4">Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item className="mt-5">
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating" className="mt-4">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment" className="mt-4">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                        className="mt-4"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
