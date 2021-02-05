import React, { useState } from "react";
import { CommentInputItem, CommentItmesComp } from "../../styled-comp";
import util from "../../lib/axios";

interface ICommnet {
   board: number
   bgroup: number
   parent: number
   sorts: number
   depth: number
   cmt: string
}

interface ICmtItem {
   e: ICommnet,
   csrf: string,
   list: ICommnet[]
   setList: any
}

function CmtItem({ e, csrf, list, setList }: ICmtItem) {
   const [reply, setReply] = useState("");
   const [depthReply, setDepthReply] = useState([]);

   const isExistReply = (target: ICommnet) => {
      console.log(e);
      const group = list.filter(e => {
         return e.bgroup === target.bgroup && e.board === e.parent;
      });
      console.log(group);
      return group.length;
   };

   const onClickReply = (e: any) => {
      e.currentTarget.nextSibling.nextSibling.classList.toggle("visible");
      e.currentTarget.nextSibling.classList.toggle("visible");
      const grp = parseInt(e.currentTarget.dataset.grp);
      const dp = parseInt(e.currentTarget.dataset.dp);
      const board = parseInt(e.currentTarget.dataset.board);
      const _list: any = list.filter((e, i) =>
         e.bgroup === grp && e.depth === dp + 1 && e.parent === board);
      //그룹그리고 댑쓰, 부모가 같은 것믇 만 가져옵니다.
      setDepthReply(_list);
   };

   // const showReply = (e: any) => {
   // };
   const onClickDepthReplyBtn = (e: any) => {
      e.currentTarget.nextSibling.classList.toggle("visible");
      e.currentTarget.nextSibling.classList.contains("visible")
         ? e.currentTarget.textContent = "접기"
         : e.currentTarget.textContent = "댓글 달기";
   };

   const onChangeReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReply(e.target.value);
   };


   const onSubmitReply = async (e: any) => {
      const replyBox = e.currentTarget.parentNode.parentNode.parentNode;
      const depth = e.currentTarget.dataset.dp;
      const sort = e.currentTarget.dataset.sorts;
      const grp = e.currentTarget.dataset.grp;
      const bn = e.currentTarget.dataset.board;
      await util.saveReply(reply, Number(bn), Number(grp), Number(sort), Number(depth), csrf);
      const { data }: any = await util.getComment();
      setReply("");
      const _list: any = data.result.filter((e: ICommnet, i: number) =>
         e.bgroup === Number(grp) && e.sorts > Number(sort) && e.depth > Number(depth));
      setDepthReply(_list);
      // replyBox.classList.remove("visible");
      setList(data.result);
   };


   return (
      <CommentItmesComp depth={e.depth}>
         <div className="cmt-whoami">
            <img src="/images/og.jpg" alt="" />
            <div className="cmt-whoami-sub">
               <span className="cmt-writer">익명</span>
               <span className="cmt-created">123123</span>
            </div>
         </div>
         <div className="cmt-content">{e.cmt}</div>
         <div className="cmt-reply-box">
            <span className="cmt-btn-reply" data-grp={e.bgroup} data-dp={e.depth} data-board={e.board} onClick={onClickReply}>
               {/*{isExistReply(e.bgroup) === 1 ? "댓글달기" : isExistReply(e.bgroup) + `개의 댓글`}*/}
               댓글달기
            </span>
            <div className={`reply-depth ${`depth` + e.depth}`}>
               {depthReply.map((e, i) => (
                  <CmtItem key={i} e={e} csrf={csrf} list={list} setList={setList} />
               ))}
            </div>
            <div className="depth-reply-container">
               <div className="depth-reply-btn" onClick={onClickDepthReplyBtn}>댓글달기</div>
               <div className="depth-reply-box">
                  <CommentInputItem>
                     <textarea placeholder="댓글을 입력해주세요." value={reply} onChange={onChangeReply} />
                     <div className="cmt-login">
                        <input type="text" name="cmt-user" placeholder="이름" />
                        <input type="password" name="cmt-pwd" placeholder="비밀번호" />
                        <div className="cmt-submit-btn"
                             data-grp={e.bgroup}
                             data-sorts={e.sorts}
                             data-dp={e.depth}
                             data-board={e.board}
                             onClick={onSubmitReply}>
                           <span>답글달기</span>
                        </div>
                     </div>
                  </CommentInputItem>
               </div>
            </div>
         </div>
      </CommentItmesComp>
   );
}

export default React.memo(CmtItem);
