import React from "react";

const Home = () => {
  const getBooks = async function (url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  };

  const retrieve = function () {
    getBooks("/api/book").then(data => console.log(data));
    console.log("test");
  };
  // getBooks('http://localhost:3001/api/book').then(data => console.log(data));

  return (
    <div>
      <button onClick={retrieve}>Click me</button>
    </div>
  );
};

export default Home;
