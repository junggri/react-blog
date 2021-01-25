import React, {useEffect} from "react";
import useCommon from "./useCommon";
import util from "../lib/axios";

function LoginFlag() {
    const {onSetLogin} = useCommon();

    const isLogin = async () => {
        const {data} = await util.checkJWTToken();
        data.decoded ? onSetLogin(true) : onSetLogin(false);
    }
    useEffect(() => {
        (async () => {
            const {data} = await util.checkJWTToken();
            data.decoded ? onSetLogin(true) : onSetLogin(false);
        })()
    }, [onSetLogin]);

}

export default LoginFlag;