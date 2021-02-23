"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Comment_1 = require("../modules/Comment");
function useComment() {
    var _a = react_redux_1.useSelector(function (state) { return state.comment; }), list = _a.list, loading = _a.loading, error = _a.error;
    var dispatch = react_redux_1.useDispatch();
    var getComment = react_1.useCallback(function (cmt_id) {
        dispatch(Comment_1.onGetComment(cmt_id));
    }, [dispatch]);
    return { list: list, getComment: getComment };
}
exports.default = useComment;
