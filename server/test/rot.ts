export function ForEach(items: any, cb: any) {
   for (let i = 0; i < items.length; i++) {
      cb(items[i]);
   }
}

export function a() {
   throw new Error("error");
}