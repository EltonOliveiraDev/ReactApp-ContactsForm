import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Container, Row, Form, Button } from "react-bootstrap";

const initialValue = {
  userId: null,
  id: "",
  name: "",
  email: "",
  body: "",
};
const Contact = () => {
  const [values, setValue] = useState(initialValue);
  const history = useNavigate();

  function onChange(evt) {
    const { name, value } = evt.target;

    setValue({ ...values, [name]: value });
  }
  function onSubmit(evt) {
    evt.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/1/comments`, values)
      .then((response) => {
        alert("Comentário enviado com sucesso!");
        history("/about");
      });
  }
  return (
    <Container>
      <Row>
        <Form className="form-content" onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              onChange={onChange}
            />
            <Form.Label>Email Address: </Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="name@exemplo.com.br"
              onChange={onChange}
            />
            <Form.Label>Your message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="body"
              name="body"
              onChange={onChange}
            />
            <Button type="submit">
              Send message
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default Contact;
