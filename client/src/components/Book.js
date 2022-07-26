import React, { useEffect } from "react";

export default class Book extends React.Component {
  constructor() {
    super();
    this.state = { hasUploadedImage: false };
    this.triggerUpload = this.triggerUpload.bind(this);
    this.uploadAndSetImage = this.uploadAndSetImage.bind(this);
  }

  redirectToBook = (e) => {
    this.props.setCurrentBookId(this.props.id);
    window.location.pathname = `/book`;
  };

  uploadAndSetImage(e) {
    let uploaded_img = "";
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      // reader.result returns base64 image path based on image load from input
      uploaded_img = reader.result;
      document.getElementById(
        `bookImg-${this.props.id}`
      ).style.backgroundImage = `url(${uploaded_img})`;
    });
    // e.target.files[0] is file uploaded to input read as blob
    reader.readAsDataURL(e.target.files[0]);
  }

  triggerUpload() {
    document.getElementById(`uploadBookImg-${this.props.id}`).click();
    this.setState({ hasUploadedImage: true });
  }

  render() {
    return (
      <div className="card" id={this.props.id}>
        <div className="bookImgContainer">
          <input
            type="file"
            id={`uploadBookImg-${this.props.id}`}
            accept="image/jpeg, image/png, image/jpg"
            className="hideImg"
            onChange={this.uploadAndSetImage}
          />
          <button
            id={`uploadButton-${this.props.id}`}
            onClick={this.triggerUpload}
          >
            Upload Image
          </button>
          <img
            src=""
            id={`bookImg-${this.props.id}`}
            className="bookImg"
            alt={`book-${this.props.id}`}
          />
        </div>
        <article onClick={this.redirectToBook}>
          <h3>Title: {this.props.title}</h3>
          <h4>Author: {this.props.author}</h4>
        </article>
      </div>
    );
  }
}
