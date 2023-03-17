test("test if the application is up and running", (done) => {
  const http = require("http");

  const options = {
    hostname: "localhost",
    port: 5000,
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
