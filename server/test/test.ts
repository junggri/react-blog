import { ForEach } from "./rot";

const mockCallback = jest.fn(x => 42 + x);

ForEach([0, 1], mockCallback);


describe("prac", () => {
   test("test1", () => {
      function callback(data) {
         expect(data).toBe("peanut butter");
      }

   });
});
