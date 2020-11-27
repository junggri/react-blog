import instance from "../config/axois.config";

let util = {
  getAllContents() {
    return instance({
      url: "/topic/lists",
      method: "get",
    });
  },
  saveContent(data: any) {
    return instance({
      url: "/topic/content",
      method: "post",
      data: data,
    });
  },
  getCSRTtoken() {
    return instance({
      url: "/api/cookies",
      method: "get",
    });
  },
  testPost(data: any) {
    instance.defaults.headers.post["X-XSRF-TOKEN"] = data._csrf;
    return instance({
      url: "/api/posts",
      method: "post",
      data: data,
    });
  },

  test() {
    return instance({
      url: "/api/test",
    });
  },
};

export default util;
