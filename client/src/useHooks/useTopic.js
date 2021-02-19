"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var Topic_1 = require("../modules/Topic");
function useTopic() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.topic; }), topic = _a.topic, loading = _a.loading, error = _a.error;
    var requestTopic = react_1.useCallback(function () {
        dispatch(Topic_1.onReqTopicsName());
    }, [dispatch]);
    return { topic: topic, loading: loading, error: error, requestTopic: requestTopic };
}
exports.default = useTopic;
