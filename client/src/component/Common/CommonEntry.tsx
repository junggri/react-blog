import React from "react";
import {MainSectionComp} from "../../styled-comp";
import {ContentSection, HomeMainSection, TopCommonSection} from "../index";
import {Route} from "react-router-dom";
import useCommon from "../../useHooks/useCommon";
import useTopic from "../../useHooks/useTopic";
import {ITopicinitialState} from "../../modules/Topic";


interface ICommonProps {
    width: number,
    height: number;
    token: string
    setHeight: (heigth: number) => void
    e: Error
}


function CommonEntry({match}: any) {
    const {topic, loading, error}: ITopicinitialState = useTopic();

    const {width, height, setHeight, e}: ICommonProps = useCommon();


    const getHeight = (data: HTMLDivElement) => {
        setHeight(data.offsetHeight);
    };

    if (topic === null) return null;

    return (
        <>
            <TopCommonSection width={width} onGetHeight={getHeight}/>
            <MainSectionComp width={width}>
                <Route path="/" exact render={() =>
                    <HomeMainSection
                        width={width}
                        height={height}
                        list={topic}/>
                }/>
                <Route path="/content/:topic" render={() =>
                    <ContentSection
                        width={width}
                        height={height}
                        list={topic}
                        match={match}/>
                }/>
            </MainSectionComp>
        </>
    );
};

export default CommonEntry;