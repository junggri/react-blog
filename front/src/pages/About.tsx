import { AboutContainerComp } from "@src/styledComponent";
import React from "react";
import { FiSmile } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { IoMdBook } from "react-icons/io";
import { GoDeviceDesktop } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const About: React.FC = () => {
   return (
      <AboutContainerComp>
         <section className="about__header">
            <div className="img-box">
               <Link to="/">
                  <img src="/images/Logo.svg" alt="로고" />
               </Link>
            </div>
         </section>
         <article className="about__summary">
            <h1><span className="about-icons"><FiSmile /></span>이정수</h1>
            <h2>
               배우고 만드는 것을 좋아하는 개발자 입니다. 프론트와 백앤드 두 분야를 좋아하며 천천히 단단한 바위가 되려고 합니다.
               프로그래밍을 통하여 창조적인 생산성을 즐기며, 배운것을 나누기 위하여 블로그를 개설하였습니다.
            </h2>
            <div className="icon__box">
               <Link to="https://github.com/junggri"><span className="github"><AiFillGithub /></span></Link>
               <a href="mailto:ghghgh6933@gmail.com"><span className="email"><HiOutlineMail /></span></a>
            </div>
         </article>
         <article className="about-skill-summary">
            <h1><span><BiCoinStack className="about-skill-summary-icons" /></span>기술스택</h1>
            <div>
               <h2>Frontend</h2>
               <div>- React</div>
               <div>- html,css,javascript</div>
            </div>
            <div>
               <h2>Backend</h2>
               <div>- nodejs(Express)</div>
               <div>- mysql</div>
               <div>- mongodb</div>
            </div>
            <div>
               <h2>Language</h2>
               <div>- Typescript</div>
            </div>
         </article>
         <article className="about__me_etc">
            <h1><span className="about-etc-icons"><GoDeviceDesktop /></span>프로젝트</h1>
            <div>
               <h2>BLOG</h2>
               <nav>
                  <li>- React - CRA, Typescript, Redux, SSR, Code-Splitting, styled-component</li>
                  <li>- Express - Typescript, mysql(RDS)</li>
                  <li>- Docker</li>
                  <li>- AWS</li>
               </nav>
            </div>
         </article>
         <article className="about__me-book">
            <h1><span className="about-book-icons"><IoMdBook /></span>Book</h1>
            <div>
               <h2>읽은 책 - 2019년 8월 부터</h2>
            </div>
            <nav>
               <li>- 12가지 인생의 법칙</li>
               <li>- 조지 길더 구글의 종말</li>
               <li>- 안간 본성의 법칙</li>
               <li>- 욕망의 진화</li>
               <li>- 정리하는 뇌</li>
               <li>- 세계 경제가 만만해지는 책</li>
               <li>- 부의 추월차선</li>
               <li>- 부의 추월차선 완결판</li>
               <li>- 구글은 어떻게 일하는가</li>
               <li>- 포노 사피엔스</li>
               <li>- 당신은 겉보기에 노력하고 있을 뿐</li>
               <li>- 한권으로 정리하는 4차산업혁명</li>
               <li>- 더 히스토리 오브 더 퓨처</li>
               <li>- Justice</li>
               <li>- 클라우드 슈밥의 제4차 산업혁명</li>
               <li>- 클라우드 슈밥의 제4차 산업혁명-The Next</li>
               <li>- 그건 내 인생이 아니다</li>
               <li>- 돈의 역사</li>
               <li>- 클루지</li>
               <li>- 타이탄의 도구들</li>
               <li>- 1인 기업이 갑이다</li>
               <li>- 철든 책방</li>
               <li>- 저커버그처럼 생각하라</li>
               <li>- 백만장자가 된 사람들의 52가지 공통점</li>
               <li>- 빅데이터 4차산업혁명의 언어</li>
               <li>- 딥 워크</li>
               <li>- 불온한 것들의 존재론</li>
               <li>- 문화정치학의 영토들</li>
               <li>- 바빌론 부자들의 돈버는 지혜</li>
               <li>- 코스모스</li>
               <li>- 화폐전쟁</li>
               <li>- Tim Cook-팀 쿡</li>
               <li>- 열정이 차이를 만든다</li>
               <li>- 나는 둔감하게 살기로 결정했다</li>
               <li>- 2050 거주불능 지구</li>
               <li>- 부자 아빠 가난한 아빠</li>
               <li>- 2030컨버전스 - 미래의 부와 기회</li>
            </nav>
         </article>
      </AboutContainerComp>
   );
};

export default About;