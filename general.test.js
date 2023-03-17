// test("test if the program builds", () => {
//   const express = require("express");
//   const app = express();
//   expect(app).toBeDefined();
// });

test("test if the application is up and running", (done) => {
  // Replace with the path to your main program file
  const request = require("supertest");
  const express = require("express");
  const app = express();

  request(app)
    .get("/")
    // .expect(200)
    .expect("Hello World")
    .end((err) => {
      if (err) {
        return done(err);
      }
      done();
    });
});
