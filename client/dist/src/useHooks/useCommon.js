"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Common_1 = require("../modules/Common");
function useCommon() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.common; }), count = _a.count, login = _a.login, loading = _a.loading, newRequest = _a.newRequest, e = _a.e;
    var onSetLogin = react_1.useCallback(function (state) {
        console.log(state);
        dispatch(Common_1.onSetIsLogin(state));
    }, [dispatch]);
    var setNewRequset = react_1.useCallback(function (state) {
        //state true mean state need new Request, false is opposite/**/
        dispatch(Common_1.onNewRequset(state));
    }, [dispatch]);
    var onGetGaCount = react_1.useCallback(function () {
        dispatch(Common_1.getCount());
    }, [dispatch]);
    react_1.useEffect(function () {
        if (count)
            return;
        onGetGaCount();
    }, [onGetGaCount, count]);
    // usePreloader(() => dispatch(getCount()));
    // usePreloader([() => dispatch(getCount()), () => dispatch(getCount())]);
    return {
        count: count,
        login: login,
        loading: loading,
        onSetLogin: onSetLogin,
        newRequest: newRequest,
        setNewRequset: setNewRequset,
        onGetGaCount: onGetGaCount,
        e: e,
    };
}
exports.default = useCommon;
