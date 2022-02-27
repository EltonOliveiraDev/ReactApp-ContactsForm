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
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  function onChange(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  }

  async function onSubmit(evt) {
    evt.preventDefault();
    const response = await axios.post("http://localhost:1337/api/contacts", {
      data: value,
    });

    console.log("POST response", response);
    alert("Comentário enviado com sucesso!");
    navigate("/about");
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
            <Button type="submit">Send message</Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default Contact;
