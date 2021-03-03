import { AboutContainerComp } from "@src/styledComponent";
import React from "react";
import { FiSmile } from "react-icons/fi";

const About: React.FC = () => {
   const dataList: string[] = [
      "1994년 11월 3일 - 28세",
      "서울과학기술대학교 - 졸업(2020년 8월)",
      "",
   ];
   return (
      <AboutContainerComp>
         <section className="about__header">
            <div className="img-box">
               <img src="/images/Logo.svg" alt="로고" />
            </div>
         </section>
         <article className="about__summary">
            <h1><span className="about-icons"><FiSmile /></span>이정수</h1>
            <h2>
               배우고 만드는 것을 좋아하는 개발자 입니다. 프론트와 백앤드 두 분야를 좋아하며 천천히 단단한 바위가 되려고 합니다.
               프로그래밍을 통하여 창조적인 생산성을 즐기며, 배운것을 나누기 위하여 블로그를 개설하였습니다.
            </h2>
         </article>
         <article className="about-skill-summary">
            <h1>기술스택</h1>
            <p>
               <h2>프론트</h2>
               
            </p>
            <p>
               <h2>백</h2>

            </p>
         </article>
      </AboutContainerComp>
   );
};

export default About;