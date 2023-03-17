const http = require("http");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve("./.env") });

const options = {
  hostname: "localhost",
  port: process.env.SERVER_PORT,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
