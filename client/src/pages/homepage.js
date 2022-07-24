import { React, useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
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

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getBookData("api/book")
      .then((data) => {
        console.log("ithis is the data? 0- ", data);
        const elements = data.map((item) => {
          return <Card title={item.title} author={item.author} key={item.id} />;
        });
        setBookData(elements);

        console.log("this is book data - ", bookData);
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
