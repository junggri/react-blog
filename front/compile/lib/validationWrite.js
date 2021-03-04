"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validaitionInput(data) {
    if (data.content === "" || data.contentName === "" || data.detail === "" || data.kindofPosts === "" || data.topicName === "") {
        return false;
    }
    else {
        return true;
    }
}
exports.default = validaitionInput;
