import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Newsitem = ({ key, title, description, src, url }) => {
  return (
    <>
      <Card
        style={{ maxWidth: "400px" }}
        className="bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      >
        <Card.Img
          variant="top"
          src={src}
          style={{ height: "200px", width: "360px" }}
        />
        <Card.Body>
          <Card.Title>{title.slice(0, 50)}</Card.Title>
          <Card.Text>
            {description
              ? description.slice(0, 90)
              : "Hi there. welcome to 24news"}
          </Card.Text>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </Card.Body>
      </Card>
    </>
  );
};
export default Newsitem;
