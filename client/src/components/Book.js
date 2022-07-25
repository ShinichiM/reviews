import React from "react";
import { useNavigate } from "react-router-dom";

export default class Book extends React.Component {
  redirectToBook = () => {
    console.log("test");
    let navigate = useNavigate();
    const bookId = this.props.id;
    navigate(`/book/${bookId}`);
  };
  // handleClick = (e) => {
  //   this.redirectToBook();
  // };
  render() {
    return (
      <div className="card" id={this.props.id} onClick={this.redirectToBook}>
        <div>Title: {this.props.title}</div>
        <div>Author: {this.props.author}</div>
      </div>
    );
  }
}
