import React from "react";
import { AboutContainerComp } from "../../styled-comp";
import { IoRemoveOutline } from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import { DiGithubFull } from "react-icons/di";
import { SiGmail } from "react-icons/si";
import Meta from "../../useHooks/UseMeta";

interface IAboutContainer {
   width: number
}

function AboutContainer() {

   const meta = {
      title: `이정수라는 사람이란`,
      description: "배는 항구에 있을때에 가장 안전하지만, 그것이 배의 존재의 이유는 아니다.",
      image: "https://www.junggri.com/images/og.jpg",
      type: "website",
   };

   return (
      <AboutContainerComp>
         <Meta data={meta} />
         <div className="about-me">이정수</div>
         <div className="about-me-nickname">junggri - 배는 항구에 있을 때 가장 안전하지만, 그게 배의 존재 이유는 아니다.</div>
         {/*<div className="about-me-slogan">배는 항구에 있을 때 가장 안전하지만, 그게 배의 존재 이유는 아니다.</div>*/}
         <div className="about-icon-box">
            <a href="https://github.com/junggri" target="_blank" rel="noreferrer"><DiGithubFull className="aib-github" /></a>
            <a href="mailto:junggri.blog@gmail.com"><SiGmail className="aib-mail" /></a>
         </div>
         <ul className="about-detail">
            <div className="about-detail-slo"><HiCode className="slo-icons" />간단소개</div>
            <li><IoRemoveOutline />1994년 11월 3일(28)</li>
            <li><IoRemoveOutline />인덕대학교(1학기)</li>
            <li><IoRemoveOutline />서울과학기술대학교(졸업)</li>
            <li><IoRemoveOutline />장점 : 꼼꼼한편, 작은 일에도 책임감을 가짐, 책을 좋아함, 확실히 열심히 함, 느리지 않은 개발속도를 가졌다고 생각함.</li>
            <li><IoRemoveOutline />단점 : 신기술을 익히려고 노력하지만, 빠르게 익히지는 못함(약 1주일 소요(기본기)), 보이는 것에 시간을 많이 할애하는 경우가 있음.</li>
            <li><IoRemoveOutline />2019년 10월 프로그래밍 독학 시작</li>
            <li><IoRemoveOutline />2020년 약1 년동안 공부를 했지만, 방향키를 잘못잡고 공부함.</li>
            <li><IoRemoveOutline />2020년 6-9월까지 코로나로 발생한 문제를 해결해보기 위하여 웹사이트 뼈대 구축</li>
            <li><IoRemoveOutline />2020년 10월 방향키를 재대로 잡고, 웹 공부를 다시 기초부터 시작함</li>
            <li><IoRemoveOutline />2020년 12월 개인블로그 개발시작</li>
            <li><IoRemoveOutline />2021년 1월 블로그 개설</li>
         </ul>
         <ul className="about-tech">
            <div className="about-tech-slo"><HiCode className="slo-icons" />기술스택</div>
            <li><IoRemoveOutline />html,css</li>
            <li><IoRemoveOutline />javascript</li>
            <li><IoRemoveOutline />typescript</li>
            <li><IoRemoveOutline />python</li>
            <li><IoRemoveOutline />React(ssr)</li>
            <li><IoRemoveOutline />Redux</li>
            <li><IoRemoveOutline />mysql,mongodb,redis</li>
            <li><IoRemoveOutline />styled-component</li>
            <li><IoRemoveOutline />docker</li>
            <li><IoRemoveOutline />AWS</li>
         </ul>
         <ul className="about-book">
            <div className="about-book-slo"><HiCode className="slo-icons" />읽은 책 - 2019년 8월 부터</div>
            <li><IoRemoveOutline />12가지 인생의 법칙</li>
            <li><IoRemoveOutline />조지 길더 구글의 종말</li>
            <li><IoRemoveOutline />안간 본성의 법칙</li>
            <li><IoRemoveOutline />욕망의 진화</li>
            <li><IoRemoveOutline />정리하는 뇌</li>
            <li><IoRemoveOutline />세계 경제가 만만해지는 책</li>
            <li><IoRemoveOutline />부의 추월차선</li>
            <li><IoRemoveOutline />부의 추월차선 완결판</li>
            <li><IoRemoveOutline />구글은 어떻게 일하는가</li>
            <li><IoRemoveOutline />포노 사피엔스</li>
            <li><IoRemoveOutline />당신은 겉보기에 노력하고 있을 뿐</li>
            <li><IoRemoveOutline />한권으로 정리하는 4차산업혁명</li>
            <li><IoRemoveOutline />더 히스토리 오브 더 퓨처</li>
            <li><IoRemoveOutline />Justice</li>
            <li><IoRemoveOutline />클라우드 슈밥의 제4차 산업혁명</li>
            <li><IoRemoveOutline />클라우드 슈밥의 제4차 산업혁명-The Next</li>
            <li><IoRemoveOutline />그건 내 인생이 아니다</li>
            <li><IoRemoveOutline />돈의 역사</li>
            <li><IoRemoveOutline />클루지</li>
            <li><IoRemoveOutline />타이탄의 도구들</li>
            <li><IoRemoveOutline />1인 기업이 갑이다</li>
            <li><IoRemoveOutline />철든 책방</li>
            <li><IoRemoveOutline />저커버그처럼 생각하라</li>
            <li><IoRemoveOutline />백만장자가 된 사람들의 52가지 공통점</li>
            <li><IoRemoveOutline />빅데이터 4차산업혁명의 언어</li>
            <li><IoRemoveOutline />딥 워크</li>
            <li><IoRemoveOutline />불온한 것들의 존재론</li>
            <li><IoRemoveOutline />문화정치학의 영토들</li>
            <li><IoRemoveOutline />바빌론 부자들의 돈버는 지혜</li>
            <li><IoRemoveOutline />코스모스</li>
            <li><IoRemoveOutline />화폐전쟁</li>
            <li><IoRemoveOutline />Tim Cook-팀 쿡</li>
            <li><IoRemoveOutline />열정이 차이를 만든다</li>
            <li><IoRemoveOutline />나는 둔감하게 살기로 결정했다</li>
            <li><IoRemoveOutline />2050 거주불능 지구</li>
            <li><IoRemoveOutline />부자 아빠 가난한 아빠(현재 읽는 중)</li>
         </ul>
      </AboutContainerComp>
   );
}

export default AboutContainer;