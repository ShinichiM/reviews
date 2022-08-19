import React, { useEffect } from "react";

function Book(props) {
  // function() {} and ()=>{} ES6 sytax have diff 'this' context
  // need to bind 'this' to functions in order to preserve object instantiation context

  function redirectToBook(e) {
    props.bookState[1](props.id);
    window.location.pathname = `/book`;
  }

  return (
    <div className="card" id={props.id}>
      <article onClick={redirectToBook}>
        <h3>Title: {props.title}</h3>
        <h4>Author: {props.author}</h4>
      </article>
    </div>
  );
}

export default Book;
