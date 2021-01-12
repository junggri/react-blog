function getUser(id: number) {
   return {
      id,
      email: "asdasd",
   };
}

test("getUser", () => {
   expect(getUser(1)).toEqual({
      id: 1,
      email: "asdasd",
   });
});

