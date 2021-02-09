import React from "react";
import { AboutContainerComp } from "../../styled-comp";

interface IAboutContainer {
   width: number
}

function AboutContainer() {
   return (
      <AboutContainerComp>
         <div className="about-me">이정수</div>
         <div className="about-me-nickname">junggri</div>
         <ul className="about-detail">
            <li>1994년 11월 3일(28)</li>
            <li>인덕대학교(1학기)</li>
            <li>반수-서울과학기술대학교(졸업)</li>
            <li>장점 : 꼼꼼한편, 작은 일애도 책임감을 가짐, 책을 좋아함, 확실히 열심히 함, 느리지 않은 개발속도를 가졌다고 생각함.</li>
            <li>단점 : 신기술을 익히려고 노력하지만, 빠르게 익히지는 못함(약 1주일 소요(기본기)), 보이는 것에 시간을 많이 할애하는 경우가 있음.</li>
            <li>2019년 10월 프로그래밍 독학 시작</li>
            <li>2020년 약1년동안 공부를 했지만, 방향키를 잘못잡고 공부함.</li>
            <li>2020년 6-9월까지 코로나로 발생한 문제를 해결해보기 위하여 웹사이트 뼈대 구축(50%)</li>
            <li>2020년 10월 방향키를 재대로 잡고, 웹 공부를 다시 기초부터 시작함</li>
            <li>2020년 12월 개인블로그 개발시작</li>
            <li>2021년 1월 블로그 개설</li>
         </ul>
         <ul className="about-tech">
            <div>기술스택</div>
            <li>html,css</li>
            <li>javascript</li>
            <li>typescript</li>
            <li>python</li>
            <li>React(ssr)</li>
            <li>Redux</li>
            <li>mysql,mongodb,redis</li>
            <li>styled-component</li>
            <li>docker</li>
            <li>AWS</li>
         </ul>
         <ul className="about-book">
            <div>2019년 8월 부터</div>
            <li>12가지 인생의 법칙</li>
            <li>조지 길더 구글의 종말</li>
            <li>안간 본성의 법칙</li>
            <li>욕망의 진화</li>
            <li>정리하는 뇌</li>
            <li>세계 경제가 만만해지는 책</li>
            <li>부의 추월차선</li>
            <li>부의 추월차선 완결판</li>
            <li>구글은 어떻게 일하는가</li>
            <li>포노 사피엔스</li>
            <li>당신은 겉보기에 노력하고 있을 뿐</li>
            <li>한권으로 정리하는 4차산업혁명</li>
            <li>더 히스토리 오브 더 퓨처</li>
            <li>Justice</li>
            <li>클라우드 슈밥의 제4차 산업혁명</li>
            <li>클라우드 슈밥의 제4차 산업혁명-The Next</li>
            <li>그건 내 인생이 아니다</li>
            <li>돈의 역사</li>
            <li>클루지</li>
            <li>타이탄의 도구들</li>
            <li>1인 기업이 갑이다</li>
            <li>철든 책방</li>
            <li>저커버그처럼 생각하라</li>
            <li>백만장자가 된 사람들의 52가지 공통점</li>
            <li>빅데이터 4차산업혁명의 언어</li>
            <li>딥 워크</li>
            <li>불온한 것들의 존재론</li>
            <li>문화정치학의 영토들</li>
            <li>바빌론 부자들의 돈버는 지혜</li>
            <li>코스모스</li>
            <li>화폐전쟁</li>
            <li>Tim Cook-팀 쿡</li>
            <li>열정이 차이를 만든다</li>
            <li>나는 둔감하게 살기로 결정했다</li>
            <li>2050 거주불능 지구</li>
            <li>부자 아빠 가난한 아빠(현재 읽는 중)</li>
         </ul>
      </AboutContainerComp>
   );
}

export default AboutContainer;