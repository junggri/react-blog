import React, { useEffect, useState } from "react";
import { CommentContainerComp, CommentInputItem } from "../../styled-comp";
import useCSRF from "../../useHooks/useCSRF";
import util from "../../lib/axios";
import CommentItems from "./CommentItems";

interface ICommnet {
   board: number
   bgroup: number
   parent: number
   sorts: number
   depth: number
   cmt: string
}

function CommentContainer() {
   const csrf = useCSRF();
   const [cmt, setCmt] = useState("");
   const [list, setList] = useState<ICommnet[]>([]);

   useEffect(() => {
      (async () => {
         const { data } = await util.getComment();
         setList(data.result);
      })();
   }, []);

   const cmtDepthZero = list.filter((e, i) => {
      if (e.sorts === 0) return list[i];
   });

   const onChangeCmt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCmt(e.target.value);
   };


   const onSubmit = async (e: any) => {
      const grp = e.currentTarget.parentNode.parentNode.dataset.grp;
      await util.saveComment(cmt, grp, csrf);
      const { data } = await util.getComment();
      setCmt("");
      setList(data.result);
   };
   return (
      <CommentContainerComp>
         <CommentInputItem data-grp={!list.length ? 1 : list[list.length - 1].bgroup + 1}>
            <textarea placeholder="댓글을 입력해주세요." value={cmt} onChange={onChangeCmt} />
            <div className="cmt-login">
               <input type="text" name="cmt-user" placeholder="이름" />
               <input type="password" name="cmt-pwd" placeholder="비밀번호" />
               <div className="cmt-submit-btn" onClick={onSubmit}>
                  <span>등록하기</span>
               </div>
            </div>
         </CommentInputItem>
         <div className="blank_space" />
         {cmtDepthZero.map((e, i) => (
            <CommentItems
               key={i}
               e={e}
               csrf={csrf}
               list={list}
               setList={setList}
            />))}
         <div style={{ height: "120px" }}></div>
      </CommentContainerComp>
   );
}

export default React.memo(CommentContainer);