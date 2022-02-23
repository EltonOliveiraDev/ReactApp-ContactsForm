import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class About extends Component {
  constructor(props){
    super(props);
  this.state = {
    contacts: [],
  };
}
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:1337/api/contacts");
    this.setState({ contacts: Array.from(response.data) });
  };
  render() {
    return (
      <div className="all-contact">
        <ul>
          {this.state.contacts.map((contact) => (
            <li>
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