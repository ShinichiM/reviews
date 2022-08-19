import { React, useEffect, useState } from "react";
import Book from "../components/Book";
import { addBook, getBookData } from "../api";

function Home(props) {
  const [bookData, setBookData] = useState([]);
  const [inputAuth, setInputAuth] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  useEffect(() => {
    getBookData("api/book")
      .then((data) => {
        // console.log("ithis is the data? 0- ", data);
        const elements = data.map((item) => {
          return (
            <Book
              title={item.title}
              author={item.author}
              id={item.id}
              key={item.id}
              bookState={[props.bookState[0], props.bookState[1]]}
            />
          );
        });
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
    console.log(req);
    addBook(req);
    // event.preventDefault();
    // window.location.replace("/");
  }

  if (window.location.pathname === "/") {
    return (
      <div>
        <form onSubmit={bookSubmitHandler}>
          <label>
            Title:{" "}
            <input
              type="text"
              value={inputTitle}
              onChange={handleInputTitleChange}
            ></input>
          </label>
          <br />
          <label>
            Author:{" "}
            <input
              type="text"
              value={inputAuth}
              onChange={handleInputAuthChange}
            ></input>
          </label>
          <br />
          <input type="submit" value="Add Book" />
        </form>
        testing
        {bookData}
      </div>
    );
  } else {
    return <div>ERROR</div>;
  }
}

export default Home;
