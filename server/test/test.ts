function ForEach(items, cb) {
   for (let i = 0; i < items.length; i++) {
      cb(items[i]);
   }
}

const mockCallback = jest.fn(x => 42 + x);

ForEach([0, 1], mockCallback);


describe("asd", () => {
   test("1-1", () => {
      enum Color {Red, GRree, Blue}

      let a: Color = Color.Blue;
      expect(a).toBe(2);
   });
});