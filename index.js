const http = require('http');

const server = http.createServer((req, res) => {

    res.end("Hello World!")

})

// const port = 8080;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


server.listen(8080)