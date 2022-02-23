import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Container, Row, Form, Button } from "react-bootstrap";

const initialValue = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [values, setValue] = useState(initialValue);
  const history = useNavigate();

  function onChange(evt) {
    const { data, value } = evt.target;

    setValue({ ...values, [data]: value });
  }
  function onSubmit(evt) {
    evt.preventDefault();
    axios
      .post('http://localhost:1337/api/contacts', values)
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
            <Form.Label>Nome</Form.Label>
            <Form.Control
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              onChange={onChange}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="name@exemplo.com.br"
              onChange={onChange}
            />
            <Form.Label>Motivo do contato</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="message"
              name="message"
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

