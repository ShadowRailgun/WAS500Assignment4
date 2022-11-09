// Setting the port and required packages
const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

// Setting the different content types
const plainTextContentType = {
  "Content-Type": "text/plain",
};
const htmlContentType = {
  "Content-Type": "text/html",
};
const cssContentType = {
  "Content-Type":"text/css",
}
const jpgContentType = {
  "Content-Type":"text/jpg",
}

// Read file for data or display error if issue with file
const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

// Setting what the root request should look for
router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

// The different pages of the website
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.get("/books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/books.html", res);
});
router.get("/book1.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book1.html", res);
});
router.get("/book2.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book2.html", res);
});
router.get("/book3.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book3.html", res);
});
router.get("/honesty.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/honesty.html", res);
});

// The style sheet for the website
router.get("/public/css/styles.css", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, cssContentType);
  customReadFile("public/css/styles.css", res);
});

// The images for the website
router.get("/images/oathbreaker.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, jpgContentType);
  customReadFile("public/images/oathbreaker.jpg", res);
});
router.get("/images/ruby.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, jpgContentType);
  customReadFile("public/images/ruby.jpg", res);
});
router.get("/images/wool.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, jpgContentType);
  customReadFile("public/images/wool.jpg", res);
});

// The POST version
router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
// The different pages of the website
router.post("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.post("/books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/books.html", res);
});
router.post("/book1.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book1.html", res);
});
router.post("/book2.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book2.html", res);
});
router.post("/book3.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book3.html", res);
});
router.post("/honesty.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/honesty.html", res);
});

// The style sheet for the website
router.post("/public/css/styles.css", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, cssContentType);
  customReadFile("public/css/styles.css", res);
});

// The images for the website
router.post("/images/oathbreaker.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, jpgContentType);
  customReadFile("public/images/oathbreaker.jpg", res);
});
router.post("/images/ruby.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, jpgContentType);
  customReadFile("public/images/ruby.jpg", res);
});
router.post("/images/wool.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, jpgContentType);
  customReadFile("public/images/wool.jpg", res);
});

// Create the server listener
http.createServer(router.handle).listen(3000);
// Print to console that the server has started listening
console.log(`The server is listening on port number: ${port}`);