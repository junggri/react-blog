"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var TextEditor_1 = require("../modules/TextEditor");
function useTextEdit() {
    var data = react_redux_1.useSelector(function (state) { return state.textEdit; });
    var dispatch = react_redux_1.useDispatch();
    var setContent = react_1.useCallback(function (content) {
        dispatch(TextEditor_1.onSetContent(content));
    }, [dispatch]);
    var setContentName = react_1.useCallback(function (contentName) {
        dispatch(TextEditor_1.onSetContentName(contentName));
    }, [dispatch]);
    var setTopic = react_1.useCallback(function (topic) {
        dispatch(TextEditor_1.onSetTopic(topic));
    }, [dispatch]);
    var setKindOfPosts = react_1.useCallback(function (kindOf) {
        dispatch(TextEditor_1.onSetKindOfPosts(kindOf));
    }, [dispatch]);
    var setDetail = react_1.useCallback(function (detail) {
        dispatch(TextEditor_1.onSetDetail(detail));
    }, [dispatch]);
    var setTempData = react_1.useCallback(function (data) {
        dispatch(TextEditor_1.onSetTempData(data));
    }, [dispatch]);
    return { data: data, setContent: setContent, setContentName: setContentName, setTopic: setTopic, setKindOfPosts: setKindOfPosts, setDetail: setDetail, setTempData: setTempData };
}
exports.default = useTextEdit;
