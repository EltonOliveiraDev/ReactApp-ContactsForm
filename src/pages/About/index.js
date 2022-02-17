import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class About extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then((res) => {
        const contacts = res.data;
        this.setState({ contacts });
      });
  }

  render() {
    return (
      <div className="all-contact">
        <ul>
          {this.state.contacts.map((contact) => (
            <li>
              {contact.name} <br />
              {contact.email}
              <br />
              {contact.body}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
