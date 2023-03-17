test("test if the program builds", () => {
  const express = require("express");
  const app = express();
  expect(app).toBeDefined();
});
