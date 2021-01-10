import React from "react";
import {TemporaryPostComp, TemporaryStorageComp} from "../../styled-comp";
import {Link} from "react-router-dom";

interface ITempPost {
    uid: string,
    topic: string,
    content_name: string,
    created: string,
    detail: string,
    file: string
}

const Srotage = ({temp}: any) => {
    if (temp === null) return null
    return (
        <TemporaryStorageComp>
            <div className="tsc-slo">임시저장</div>
            <div>
                {temp.map((e: ITempPost) => (
                    <TemporaryPostComp key={e.uid} data-name={e.file}>
                        <Link className="temp-name" to={`/write/${e.uid}`}>{e.content_name}</Link>
                    </TemporaryPostComp>
                ))}
            </div>
        </TemporaryStorageComp>
    );
}

export default React.memo(Srotage)