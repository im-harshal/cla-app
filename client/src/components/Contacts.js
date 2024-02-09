import React, { Component } from "react";
import SingleContact from "./SingleContact";
import AddContacts from "./AddContacts.js";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/contacts")
      .then((response) => response.json())
      .then((data) => this.setState({ contacts: data }));
  }

  render() {
    return (
      <div className="row">
        <div className="col s5">
          <AddContacts />
        </div>
        <div className="col s1"></div>
        <div className="col s6">
          {this.state.contacts.map((item) => (
            <SingleContact key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
