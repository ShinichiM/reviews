async function addBook(req, res) {
  const response = await fetch("api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  if (response.ok) {
    console.log("good to go");
  } else {
    console.error("invalid request");
  }
}

async function getBookData() {
  const response = await fetch("api/book", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response.json();
}

module.exports = { addBook, getBookData };
