const app = require("../src/app");
const request = require("supertest");

describe("test the root", function() {
   test("it shoud respnse the", (done) => {
      request(app).get("/").then((response: any) => {
         expect(response.text).toEqual("heelo");
         done();
      });
   });
});