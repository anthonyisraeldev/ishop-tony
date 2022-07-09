import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBox.scss";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
      setKeyword("");
    } else {
      history.push("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      style={{ display: "flex" }}
      className="search"
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-2 search__input"
        value={keyword}
      ></Form.Control>
      <Button
        type="submit"
        className="p-2 search__button"
        style={{ marginLeft: "10px" }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
