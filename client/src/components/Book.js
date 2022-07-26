import React, { useEffect } from "react";

export default class Book extends React.Component {
  constructor() {
    super();
    this.state = { hasUploadedImage: false };
    this.uploadImage = this.uploadImage.bind(this);
  }

  redirectToBook = (e) => {
    this.props.setCurrentBookId(this.props.id);
    window.location.pathname = `/book`;
  };

  uploadImage() {
    document.getElementById(`uploadBookImg-${this.props.id}`).click();
    document
      .getElementById(`uploadBookImg-${this.props.id}`)
      .addEventListener("input", (e) => {
        console.log(e.target.files);
        // creates file URL for uploaded image
        console.log(URL.createObjectURL(e.target.files[0]).split("/")[3]);
        // if(e.target.files.length) {
        // }
      });
    // document
    //   .getElementById(`uploadBookImg-${this.props.id}`)
    //   .addEventListener("input", (e) => {
    //     console.log(e.target.files);
    //   });
    // document.getElementById(`uploadBookImg-${this.props.id}`).addEventListener("change", () => {
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     const uploaded_image = reader.result;
    //     document.getElementById(
    //       "bookImg"
    //     ).style.backgroundImage = `url(${uploaded_image})`;
    //   });
    // });

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
          />
          <button
            id={`uploadButton-${this.props.id}`}
            onClick={this.uploadImage}
          >
            Upload Image
          </button>
          <img id="bookImg" className="bookImg" />
        </div>
        <article onClick={this.redirectToBook}>
          <h3>Title: {this.props.title}</h3>
          <h4>Author: {this.props.author}</h4>
        </article>
      </div>
    );
  }
}
