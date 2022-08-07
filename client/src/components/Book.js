import React, { useEffect } from "react";
import { setEmitFlags } from "typescript";

export default class Book extends React.Component {
  // function() {} and ()=>{} ES6 sytax have diff 'this' context
  // need to bind 'this' to functions in order to preserve object instantiation context
  constructor() {
    super();
    this.state = { hasUploadedImage: false };
  }

  redirectToBook = (e) => {
    this.props.bookState[1](this.props.id);
    window.location.pathname = `/book`;
  };


  triggerUpload() {
    document.getElementById(`uploadBookImg-${this.props.id}`).click();
    this.setState({ hasUploadedImage: true });
  }

  render() {
    return (
      <div className="card" id={this.props.id}>
        <article onClick={this.redirectToBook}>
          <h3>Title: {this.props.title}</h3>
          <h4>Author: {this.props.author}</h4>
        </article>
      </div>
    );
  }
}
