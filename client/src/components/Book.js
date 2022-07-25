import React, { useEffect } from "react";

export default class Book extends React.Component {
  redirectToBook = (e) => {
    this.props.setCurrentBookId(this.props.id);
    window.location.pathname = `/book`;
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
