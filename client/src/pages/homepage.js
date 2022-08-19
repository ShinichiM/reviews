import { React, useEffect, useState } from "react";
import Book from "../components/Book";
import { addBook, getBookData } from "../api";
import "../App.css";

function Home(props) {
  const [bookData, setBookData] = useState([]);
  const [inputAuth, setInputAuth] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  useEffect(() => {
    getBookData("api/book")
      .then((bookArr) => {
        console.log(bookArr);

        let elements = [];
        for (let i = bookArr.length - 1; i > 0; i--) {
          elements.push(
            <Book
              title={bookArr[i].title}
              author={bookArr[i].author}
              id={bookArr[i].id}
              key={bookArr[i].id}
              bookState={[props.bookState[0], props.bookState[1]]}
            />
          );
        }
        setBookData(elements);
      })
      .catch(console.error);
  }, []);

  function handleInputAuthChange(event) {
    setInputAuth(event.target.value);
  }

  function handleInputTitleChange(event) {
    setInputTitle(event.target.value);
  }

  function bookSubmitHandler(event) {
    const req = {
      body: {
        author: inputAuth,
        title: inputTitle,
      },
    };
    addBook(req);
  }

  if (window.location.pathname === "/") {
    return (
      <div>
        <div className="formContainer">
          <form onSubmit={bookSubmitHandler}>
            <label>
              <input
                type="text"
                value={inputTitle}
                onChange={handleInputTitleChange}
                placeholder="Title"
              ></input>
            </label>
            <label>
              <input
                type="text"
                value={inputAuth}
                onChange={handleInputAuthChange}
                placeholder="Author"
              ></input>
            </label>
            <br />
            <input type="submit" value="Add Book" />
          </form>
        </div>
        {bookData}
      </div>
    );
  } else {
    return <div>ERROR</div>;
  }
}

export default Home;
