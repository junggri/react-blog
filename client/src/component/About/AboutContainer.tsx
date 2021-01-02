import React from 'react'
import {AboutContainerComp} from "../../styled-comp";

interface IAboutContainer {
    width: number
}

function AboutContainer({width}: IAboutContainer) {
    return (
        <AboutContainerComp width={width}>
            <div className="icons" style={{
                fontSize: "17rem",
                textAlign: 'center'
            }}>🔥 💻 🖥 🖱
            </div>
            <div className="detail" style={{
                fontSize: "2rem",
                textAlign: 'center',
                marginTop: '100px'
            }}>업데이트 예정입니다.
            </div>
        </AboutContainerComp>
    )
}

export default AboutContainer