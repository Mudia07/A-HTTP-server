//Create http variable
const http = require('http');

//Create a server with variable
const server = http.createServer(function (req, res) {
  //Create headers
  //res.writeHead(200, { 'content-type': 'text/plain' });
  //res.writeHead(200, { 'content-type': 'application/json' });
  //res.writeHead(200, { 'content-type': 'text/html' });

  //Send back some information
  res.end(`
  {
      "Name": "Osamudiame"
     "Country": "Nigeria"
     "Hobby": "reading, research, learning new things"
  }
   `);
  //res.end(`
  // <html>
  //<body style="background: black; text-align: center; color: white;">
  //<h1>
  // This is my backend task for Zuri internship
  //</h1>
  //  </body>

  //</html>

  // `);
});

//Create a port
server.listen(4000, '127.0.0.1');

console.log('Yes, you have created a server');
