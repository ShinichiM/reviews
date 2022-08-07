import { React, useEffect, useState } from "react";
import Book from "../components/Book";

const Home = (props) => {
  const [bookData, setBookData] = useState([]);

  const getBookData = async function (url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  };

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

        // console.log("this is book data - ", bookData);
      })
      .catch(console.error);
  }, []);

  if (window.location.pathname === "/") {
    return <div>testing {bookData}</div>;
  } else {
    return <div>ERROR</div>;
  }
};

export default Home;
