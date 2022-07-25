import React from "react";

export default class Book extends React.Component {
  redirectToBook = () => {
    console.log("test");
    const bookId = this.props.id;
    window.location.pathname = `/book/${bookId}`;
  };

  render() {
    return (
      <div className="card" id={this.props.id} onClick={this.redirectToBook}>
        <div>Title: {this.props.title}</div>
        <div>Author: {this.props.author}</div>
      </div>
    );
  }
}
