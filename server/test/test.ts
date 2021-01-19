import { ForEach, Users } from "./rot";
import axios from "axios";

const mockCallback = jest.fn(x => 42 + x);

ForEach([0, 1], mockCallback);


// describe("prac", () => {
//    test("test1", () => {
//       function callback(data) {
//          expect(data).toBe("peanut butter");
//       }
//    });
//
// });


jest.mock("axios");


test("should fetch users", () => {
   const users = [{ name: "bog" }];
   const rerp = { data: users };
   (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(rerp));

   return Users.all().then(data => expect(data).toEqual(users));
});