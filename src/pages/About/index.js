import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:1337/api/contacts");
    console.log(response);
    const contacts = response.data.data.map((entry) => ({
      id: entry.id,
      name: entry.attributes.name,
      email: entry.attributes.email,
      message: entry.attributes.message,
    }));
    this.setState({ contacts });
  };
  render() {
    return (
      <div className="all-contact">
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}
              <br />
              {contact.email}
              <br />
              {contact.message}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
