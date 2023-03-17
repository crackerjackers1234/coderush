// test("test if the program builds", () => {
//   const express = require("express");
//   const app = express();
//   expect(app).toBeDefined();
// });

// test("test if the application is up and running", (done) => {
//   // Replace with the path to your main program file
//   const request = require("supertest");
//   const express = require("express");
//   const app = express();

//   request(app)
//     .get("/")
//     .expect("Hello World")
//     .end((err) => {
//       if (err) {
//         return done(err);
//       }
//       done();
//     });
// });

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

// test("test if the app is running", async () => {
//   const request = require("supertest");
//   const express = require("express");
//   const app = express();
//   const response = await request(app).get("/ping");
//   expect(response.status).toBe(200);
//   expect(response.body).toEqual({ message: "pong" });
// });
