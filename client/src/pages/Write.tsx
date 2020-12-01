import React from "react";
import { ArticleContainer, WriteBox, WriteConditionBox } from "../styled-comp";
import { SelectTopic, TextEditor } from "component";
import "../../node_modules/react-quill/dist/quill.snow.css";


function Write() {
   return (
      <>
         <WriteBox>
            <TextEditor />
         </WriteBox>
         <WriteConditionBox>
            <ArticleContainer>
               <SelectTopic />
               {/*   <div className="topicsBox">*/}
               {/*      <ul>*/}
               {/*         <TopicsItem>nodejs</TopicsItem>*/}
               {/*         <TopicsItem>book</TopicsItem>*/}
               {/*         <TopicsItem>nodejs</TopicsItem>*/}
               {/*         <TopicsItem>book</TopicsItem>*/}
               {/*      </ul>*/}
               {/*   </div>*/}
               {/*   <div className="buttonBox">*/}
               {/*      <WriteBtnComp onClick={onSubmit}>작성하기</WriteBtnComp>*/}
               {/*      <WriteBtnComp onClick={onStorage}>임시저장</WriteBtnComp>*/}
               {/*   </div>*/}
            </ArticleContainer>
         </WriteConditionBox>
      </>
   );
}

export default Write;
