test("test if the application is up and running", (done) => {
  const http = require("http");
  const dotenv = require("dotenv");

  require("dotenv").config({ path: require("path").resolve("./.env") });

  const options = {
    hostname: "localhost",
    port: process.env.SERVER_PORT,
    path: "/",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    expect(res.statusCode).toBe(200);

    let data = "";

    res.on("data", (d) => {
      data += d;
    });

    res.on("end", () => {
      expect(data).toContain("Hello World");
      done();
    });
  });

  req.on("error", (error) => {
    done(error);
  });

  req.end();
});
