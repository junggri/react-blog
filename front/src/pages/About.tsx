import { AboutContainerComp, AboutNavbarComp } from "@src/styledComponent";
import React from "react";
import { Link } from "react-router-dom";


const About: React.FC = () => {
   return (
      <>
         <AboutNavbarComp>
            <section>
               <Link to="/"><img src="./images/Logo.svg" alt="" /></Link>
            </section>
         </AboutNavbarComp>
         <div style={{
            backgroundImage: `url("./images/background.jpg")`,
            position: "relative",
            backgroundPosition: "50%, 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "280px",
         }} />
         <AboutContainerComp>
            <section className="about_me">
               <h1>이정수</h1>
               <h2>Profile</h2>
               <ul>
                  <li>생년월일 : 1994년 11월 3일</li>
                  <li>전화번호 : 01077652103</li>
                  <li>이메일 : jjuu6933@naver.com</li>
               </ul>
            </section>
            <section className="about__education">
               <h2>Education</h2>
               <ul>
                  <li>서울과학기술대학교</li>
                  <span>2014년 2월 - 2020년 8월</span>
                  <span>안경광학과 학사졸업</span>
               </ul>
            </section>
            <section className="about__summary">
               <h2>Summary</h2>
               <article>
                  이제 막 사회에 발들이기 시작한 28살 이정수라고 합니다. 학부생때에 느꼈던 문제점들과 해경방안, 그리고 클라우드 슈밥의 제4차 산업혁명 이라는 책을 통하여
                  프로그래밍 세계에 입문하게 되었습니다. 프로그래밍을 통하여 창조적인 생산성과, 능동적으로 삶을 살아가는 방법을 배울 수 있었으며 새로운 것을 배우고 지식을 나누는 것을
                  좋아합니다. 현재에는 블로그운영을 하며 새로운 기술들을 익히고, 적용하는 과정에 즐거움을 느끼는 중입니다. 배움에서 끝이아니라 지식의 공유를 통하여 한번 더 발전하는 것을
                  지향합니다.
               </article>
            </section>
            <section className="about__stack">
               <h2>Language and used</h2>
               <ul>
                  <li>javascript, typescript(main), python</li>
                  <li>HTML, CSS</li>
                  <li>Mongodb, Mysql</li>
                  <li>Express, Nestjs</li>
                  <li>Reactjs</li>
                  <li>AWS EC2, AWS RDS</li>
                  <li>DOCKER</li>
               </ul>
            </section>
            <section className="about__portfolio">
               <h2>Portfolio</h2>
               <ul>
                  <li className="pf__blog">블로그 <span><Link to="/portfolio/blog">LINK</Link></span></li>
                  <ul>
                     <li>2020년 12월 - 2021년 1월(v1.0.0</li>
                     <li>언어 및 기술 : React js, Express, Docker, AWS</li>
                  </ul>
                  <li style={{ marginTop: "20px" }}>언젠가는 하얀화면에 검은 글씨가 많아질 날을 위하여 오늘도,내일도 꾸준히 채워나가는 중입니다.</li>
               </ul>
            </section>
            {/*<section className="about-content">*/}
            {/*</section>*/}
            {/*<section className="about__header">*/}
            {/*   <div className="img-box">*/}
            {/*      <Link to="/">*/}
            {/*         /!*<img src="/images/Logo.svg" alt="로고" />*!/*/}
            {/*      </Link>*/}
            {/*   </div>*/}
            {/*</section>*/}
            {/*<article className="about__summary">*/}
            {/*   <h1>이정수</h1>*/}
            {/*   <h2>*/}
            {/*      배우고 만드는 것을 좋아하는 개발자 입니다. 프론트와 백앤드 두 분야를 좋아하며 천천히 단단한 바위가 되려고 합니다.*/}
            {/*      프로그래밍을 통하여 창조적인 생산성을 즐기며, 배운것을 나누기 위하여 블로그를 개설하였습니다.*/}
            {/*   </h2>*/}
            {/*   <div className="icon__box">*/}
            {/*      <Link to="https://github.com/junggri"><span className="github"><AiFillGithub /></span></Link>*/}
            {/*      <a href="mailto:ghghgh6933@gmail.com"><span className="email"><HiOutlineMail /></span></a>*/}
            {/*   </div>*/}
            {/*</article>*/}
            {/*<article className="about-skill-summary">*/}
            {/*   <h1><span><BiCoinStack className="about-skill-summary-icons" /></span>기술스택</h1>*/}
            {/*   <div>*/}
            {/*      <h2>Frontend</h2>*/}
            {/*      <div>- React</div>*/}
            {/*      <div>- html,css,javascript</div>*/}
            {/*   </div>*/}
            {/*   <div>*/}
            {/*      <h2>Backend</h2>*/}
            {/*      <div>- nodejs(Express)</div>*/}
            {/*      <div>- mysql</div>*/}
            {/*      <div>- mongodb</div>*/}
            {/*   </div>*/}
            {/*   <div>*/}
            {/*      <h2>Language</h2>*/}
            {/*      <div>- Typescript</div>*/}
            {/*   </div>*/}
            {/*</article>*/}
            {/*<article className="about__me_etc">*/}
            {/*   <h1><span className="about-etc-icons"><GoDeviceDesktop /></span>프로젝트</h1>*/}
            {/*   <div>*/}
            {/*      <h2>BLOG</h2>*/}
            {/*      <nav>*/}
            {/*         <li>- React - CRA, Typescript, Redux, SSR, Code-Splitting, styled-component</li>*/}
            {/*         <li>- Express - Typescript, mysql(RDS)</li>*/}
            {/*         <li>- Docker</li>*/}
            {/*         <li>- AWS</li>*/}
            {/*      </nav>*/}
            {/*   </div>*/}
            {/*</article>*/}
            {/*<article className="about__me-book">*/}
            {/*   <h1><span className="about-book-icons"><IoMdBook /></span>Book</h1>*/}
            {/*   <div>*/}
            {/*      <h2>읽은 책 - 2019년 8월 부터</h2>*/}
            {/*   </div>*/}
            {/*   <nav>*/}
            {/*      <li>- 12가지 인생의 법칙</li>*/}
            {/*      <li>- 조지 길더 구글의 종말</li>*/}
            {/*      <li>- 안간 본성의 법칙</li>*/}
            {/*      <li>- 욕망의 진화</li>*/}
            {/*      <li>- 정리하는 뇌</li>*/}
            {/*      <li>- 세계 경제가 만만해지는 책</li>*/}
            {/*      <li>- 부의 추월차선</li>*/}
            {/*      <li>- 부의 추월차선 완결판</li>*/}
            {/*      <li>- 구글은 어떻게 일하는가</li>*/}
            {/*      <li>- 포노 사피엔스</li>*/}
            {/*      <li>- 당신은 겉보기에 노력하고 있을 뿐</li>*/}
            {/*      <li>- 한권으로 정리하는 4차산업혁명</li>*/}
            {/*      <li>- 더 히스토리 오브 더 퓨처</li>*/}
            {/*      <li>- Justice</li>*/}
            {/*      <li>- 클라우드 슈밥의 제4차 산업혁명</li>*/}
            {/*      <li>- 클라우드 슈밥의 제4차 산업혁명-The Next</li>*/}
            {/*      <li>- 그건 내 인생이 아니다</li>*/}
            {/*      <li>- 돈의 역사</li>*/}
            {/*      <li>- 클루지</li>*/}
            {/*      <li>- 타이탄의 도구들</li>*/}
            {/*      <li>- 1인 기업이 갑이다</li>*/}
            {/*      <li>- 철든 책방</li>*/}
            {/*      <li>- 저커버그처럼 생각하라</li>*/}
            {/*      <li>- 백만장자가 된 사람들의 52가지 공통점</li>*/}
            {/*      <li>- 빅데이터 4차산업혁명의 언어</li>*/}
            {/*      <li>- 딥 워크</li>*/}
            {/*      <li>- 불온한 것들의 존재론</li>*/}
            {/*      <li>- 문화정치학의 영토들</li>*/}
            {/*      <li>- 바빌론 부자들의 돈버는 지혜</li>*/}
            {/*      <li>- 코스모스</li>*/}
            {/*      <li>- 화폐전쟁</li>*/}
            {/*      <li>- Tim Cook-팀 쿡</li>*/}
            {/*      <li>- 열정이 차이를 만든다</li>*/}
            {/*      <li>- 나는 둔감하게 살기로 결정했다</li>*/}
            {/*      <li>- 2050 거주불능 지구</li>*/}
            {/*      <li>- 부자 아빠 가난한 아빠</li>*/}
            {/*      <li>- 2030컨버전스 - 미래의 부와 기회</li>*/}
            {/*   </nav>*/}
            {/*</article>*/}
         </AboutContainerComp>
      </>
   );
};

export default About;