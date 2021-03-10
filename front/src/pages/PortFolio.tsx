import React from "react";
import { AboutNavbarComp, PortFolioComp } from "@src/styledComponent";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
   return (
      <>
         <AboutNavbarComp>
            <section>
               <Link to="/"><img src="../images/Logo.svg" alt="" /></Link>
            </section>
         </AboutNavbarComp>
         <PortFolioComp>
            <img src="../images/portfolio.svg" alt="포트폴리오 이미지" />
            <h1>1. 블로그</h1>
            <nav className="blog__used_list">
               <ul>
                  <li>React</li>
                  <ul>
                     <li>Server Side Rendering</li>
                     <li>code splitting</li>
                  </ul>
                  <li>Typescript</li>
                  <li>Express(Nest로 변환 중)</li>
                  <li>Styled-components</li>
                  <li>Graphql</li>
                  <li>AWS RDS - Mysql</li>
                  <li>AWS EC2</li>
                  <li>Docker</li>
               </ul>
            </nav>
            <article>
               <h1>사용목적</h1>
               <ul>
                  <li>React</li>
                  <section>
                     <div>
                        당시 SPA프레임워크 혹은 라이브러리공부 중 3가지의 선택지가 있었습니다. React, Vue, Angluar 중 하나를 선택해야
                        하는 상황에 있었습니다. 저에게 가장 친근했던 공식문서와 사람들이 많이 사용하는 프레임워크 혹인 라이브러리인 React를
                        선택하였습니다. Nextjs라는 선택지가 있었지만, 저의 블로그는 알아서 해주는 마법을 잠시 피해가기로 했습니다. React js를
                        기반으로 SSR, Code-splitting을 진행하였습니다.
                     </div>
                     <a href="https://www.junggri.com/topic/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80/f66e3b4b-49c3-4dfc-bd23-1a8e6e81525b">SSR</a>
                     <a href="https://www.junggri.com/topic/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80/297e0d77-6e89-4adc-b65f-80ec6faa57f6">Code-splitting</a>
                     <img src="../images/compare.png" alt="" />
                  </section>
                  <li>Typescript</li>
                  <section>
                     <div>
                        처음 접하게 되었던 프로그래밍언어가 javascript였습니다. 타입스크립트를 알기 전 동적, 정적언어의 차이점을 잘 알지 못했습니다.
                        자바스크립트는 동적언어이니 그런대로 오류를 내지 않기 위하여 코드를 작성했던 것 같습니다. 타입스크립트를 알게된 후 동적언어라는 것을 알게되었지만,
                        공식문서를 읽기만 해서는 동적언어라는 것이 주는 장점을 알지 못했습니다. 타입스크립트를 도입하고 객체의 타입을 지정하고 또 IDE는 타입을 추론해주다보디,
                        처음에는 개발속도가 느렸지만, 사용하면 사용할수록 에러발생을 적게 만들 수 있었습니다. 아마 저는 이제 꾸준히 타입스크립트를 사용하지 않을까 싶습니다!!
                     </div>
                     <img src="../images/typescript.png" alt="" />
                  </section>
                  <li>Express</li>
                  <section>
                     <div>
                        자바스크립트를 공부한 후 브라우져 이외애서 자바스크립트 런타임을 가지는 nodejs를 배우게 되었습니다. 그리고 nodejs를 바탕으로
                        웹 서버를 구동할 수 있게해주는 Express를 사용하였습니다. Express만을 사용하다보니 클라이언트와 백엔드 사이에서 데이터가 왔다갔다 하는
                        방법과 아키택쳐를 잡는것에 대하여 의문이 들었습니다. 혼자 개발을 공부하다보니 정해진 틀이 없고, 알아서 해야한다는 생각에 실무에서는 이렇게 하지 않을거 같은데?
                        라는 생각도 들고는 했습니다. 어느정도 express에 익숙해지고 조금 더 낳은 프레임워크를 사용해보고 마음을 먹은 후 nestjs를 접하게 되었습니다.
                        express를 기반으로 하였지만, epxress에서는 배울 수 없었던, 의존성 주입, AOP라는 개념들을 접할 수 있었습니다. 다시한번 프로그래밍의 개념이 어렵다는것을
                        느끼는 순간 이였지만, 배우면 실력향상에 큰 도움이 될 것 같다고 판단했고, 지금은 nestjs로 변환작업 중입니다.
                     </div>
                  </section>
                  <li>Styled-component</li>
                  <section>
                     <div>
                        MPA에서는 항상 페이지를 HTML,CSS로 작성하다보니 클래스네임이 겹치거나 무엇으로 해야할지 난감할 떄가 종종 있었습니다. React에서 css-in-js로
                        많이 쓰인다는 styled-component를 한번 사용해보니, 컴포넌트도 css로 작성해주면 유일한 컴포넌트가 만들어지다보니 이보다 편리할 수가 없었습니다. 또한
                        조건에따라 css를 추가해주던 방법도 한층 간결해지다보니, 사용하지 않을 이유가 없었습니다. 이제는 HTML과 CSS로 페이지 만드는것이 귀찮아지지 않을까 싶습니다.
                     </div>
                     <img src="../images/styled.png" alt="" />
                  </section>
                  <li>Graphql</li>
                  <section>
                     <div>
                        그래프큐엘을 모르기전에는 rest api를 이용하여 http 통신을 하였지만, 그래프큐앨을 알고나서는 한번쯤은 적용해보고 싶었습니다. 단일 Endpoint를 가지기도 하고
                        오로지 Post Method를 이용하기도 하고, 원하는 데이터만 딱딱 가져올 수도 있고, 불필요하게 api요청을 하지 않을 수도 있었습니다. 근데 매력적이지 않은 한가지 단점이
                        있었습니다. Post요청인만큼 캐시가 되지 않는다는 것이였습니다.물론 Apollo서버를 둠으로써 캐시를 가능하게 해준다지만, 실서비스, 유저에게 보여지는 것들에는
                        graphql의 요청이 무리라고 판단하였고, admin에서만 그래프큐엘을 적용하였습니다. 저의 블로그는 글래프큐엘을 적용하기는 했지만, 현재는 대부분의 요청이
                        rest API로 구성되어 있습니다.(사실 RestFul하게 더 연습이 필요하기도 합니다).
                     </div>
                     <img src="../images/graphql.png" alt="" />
                  </section>
                  <li>AWS EC2, RDS</li>
                  <section>
                     <div>
                        EC2는 당연 무료이기 떄문에 사용하기로 결정했다.(프리티어 짱짱맨) 저의 블로그가 하루에 몇 백,몇 천명이 들어로는 큰 블로그가 아니다보니
                        프리티어도 충분하다고 느꼇습니다. 그래서 EC2를 결정하였습니다!!. AWS RDS를 선택한 이유는 2가지의 이유가 있었습니다. EC2에 데이터베이스
                        서버를 구동해도 상관없지만, 데이터가 인스턴스에 종속되는 것 보다는 AWS RDS에 데이터를 저장하는 것이 지금이나 나중에 더 편할 거 같다는 생각이
                        들었기 때문에 RDS를 선택하였습니다.
                     </div>
                     <img src="../images/rds.png" alt="" />
                  </section>
                  <li>DOCKER</li>
                  <section>
                     <div>
                        도커를 선택했던 이유는 다양했습니다. 도커에 대하여 깊게 이해하지는 못하였지만, 컨테이너를 띄어서 OS에 종속적이지 않게
                        개발에 집중할 수 있게 해주고, 배포가 쉽기도 하고 등등 이중 저에게 가장 큰 메리트로 다가온 점은 배포가 쉽다는 점이였습니다.
                        프로그래밍 공부 초창기에는 FileZila같은 프로그램을 통해 인스턴스에 파일들을 올려주었는데, 도커로 이미지를 빌드한 후 인스턴스에서
                        컨테이너만 띄어주니 이보다 간편할 수가 없었습니다(물론 설정을 공부하는데 시간이 걸리기는 하지만). 이점에서 도커를 선택하게 되었습니다.
                     </div>
                     <span>docker-compose up!</span>
                     <img src="../images/docker.png" alt="" />
                  </section>
                  <section className="sd-chap">
                     <h1>기억에 남았던 점</h1>
                     <ul>
                        <li>구현되어 있는것을 사용하자</li>
                        <div>
                           리액트 코드스플리팅, 서버사이드 렌더링을 직접구현하면서 많은 난관들이 있었습니다. 수 많은 에러들과 싸움을 하면서
                           적지 않은 시간들이 소요되었습니다. 이때 간절히 느낀것이 Nextjs가 괜히 존재하는 이유가 아니구나, 사람들이 추천하는 이유가
                           있구나라는 생각이였습니다. 하지만!! 구현되있는것도 한번쯤은 구현해보고 사용해야지, 블랙박스인 로직들을 완벽히는 아니더라도
                           프로그램이 어떻게 돌아가는지에 대한 이해를 할 수 있기 때문입니다. 결국 결론은 혼자 진행하는 토이 프로젝트는 한번쯤은 구현하는것을
                           지향하고, 협업을 하는 상황이면 이미 주어진 프레임워크를 지향하는 것이 맞는 선택인 것 같습니다.
                        </div>
                        <li>글을 작성하려면 조심해서 작성하자</li>
                        <div>
                           너무나 당연한 이야기이지만, 블로그를 운영하는 가장 큰 이유 중 하나는 지식을 정리하기 위함이라고 해도 과언이 아닐것 같습니다.
                           그런점에서 저도 하루하루 공부했던 내용들을 정리하려고 했습니다. 근데 포스팅을 하기위해 블로그를 운영하는건지 공부를 해서 포스팅을
                           하는건지.. 약간 전자에 까깝게 생각하고 생각했던 것 같습니다. 그래서 이제는 포스팅을 많이 하지 못하더라고 제가 많이 알고 포스팅을 하는것을
                           목적으로 두었습니다. 그래야 제가 이 블로그를 개설한 궁극적인 목표를 달성할 수 있지 않을까 싶습니다.
                        </div>
                     </ul>
                  </section>
               </ul>
            </article>
            <footer>
               긴 글 읽어 주셔서 감사합니다.
            </footer>
         </PortFolioComp>
      </>
   );
};

export default Portfolio;