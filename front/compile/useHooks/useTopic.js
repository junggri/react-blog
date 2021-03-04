"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var Topic_1 = require("../modules/Topic");
function useTopic() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.topic; }), writeData = _a.writeData, loading = _a.loading, error = _a.error;
    var tableName = writeData.tableName, tempPostList = writeData.tempPostList;
    var requestTopicAndTempPostData = react_1.useCallback(function (token) {
        dispatch(Topic_1.onRequestTopicAndTempPostData(token));
    }, [dispatch]);
    return { tableName: tableName, tempPostList: tempPostList, loading: loading, error: error, requestTopicAndTempPostData: requestTopicAndTempPostData };
}
exports.default = useTopic;
