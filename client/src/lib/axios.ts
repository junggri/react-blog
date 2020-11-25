import instance from "../config/axois.config";

let util = {
  getContent() {
    return instance({
      url: "/api/contents",
      method: "get",
    });
  },
  getCSRTtoken() {
    return instance({
      url: "/api/cookies",
      method: "get",
    });
  },
  testPost(data: any) {
    console.log(data);
    instance.defaults.headers.post["X-XSRF-TOKEN"] = data._csrf;
    return instance({
      url: "/api/posts",
      method: "post",
      data: data,
    });
  },
  saveContent(data: any) {
    console.log(data);
    return instance({
      url: "/api/content",
      method: "post",
      data: data,
    });
  },
};

export default util;
