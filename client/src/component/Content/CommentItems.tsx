import React, { useState } from "react";
import { CommentInputItem, CommentItmesComp } from "../../styled-comp";
import util from "../../lib/axios";
import createDOMPurify from "dompurify";

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
   postid: string
}

function CmtItem({ e, csrf, list, setList, postid }: ICmtItem) {
   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;
   const [reply, setReply] = useState("");
   const [depthReply, setDepthReply] = useState([]);

   const makeComment = (e: ICommnet) => ({
      __html: typeof window === "object" ? (DOMPurify as any).sanitize(e.cmt) : null,
   });


   const isExistReply = (target: ICommnet) => {
      if (!target.depth) {
         return list.filter(e => e.bgroup === target.bgroup && e.depth > target.depth);
      } else {
         return list.filter(e => e.bgroup === target.bgroup && e.depth === target.depth + 1 && e.parent === target.board);
      }
   };

   const onClickReply = (e: any) => {
      const grp = parseInt(e.currentTarget.dataset.grp);
      const dp = parseInt(e.currentTarget.dataset.dp);
      const board = parseInt(e.currentTarget.dataset.board);
      e.currentTarget.nextSibling.nextSibling.classList.toggle("visible");
      e.currentTarget.nextSibling.classList.toggle("visible");
      const _list: any = list.filter((e, i) => e.bgroup === grp && e.depth === dp + 1 && e.parent === board);//그룹그리고 댑쓰, 부모가 같은 것믇 만 가져옵니다.
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
      if (reply === "") return alert("댓글을 입력해주세요.");
      const replyBox = e.currentTarget.parentNode.parentNode.parentNode;
      const depth = e.currentTarget.dataset.dp;
      const sort = e.currentTarget.dataset.sorts;
      const grp = e.currentTarget.dataset.grp;
      const bn = e.currentTarget.dataset.board;
      await util.saveReply(reply, Number(bn), Number(grp), Number(sort), Number(depth), postid, csrf);
      const { data }: any = await util.getComment(postid);
      setReply("");
      const _list: any = data.result.filter((e: ICommnet, i: number) => e.bgroup === Number(grp) && e.sorts > Number(sort) && e.depth + 1 === Number(depth));
      //부모가같ㅇ은 댓글들을 뽑는다
      setDepthReply(_list);
      replyBox.classList.remove("visible");
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
         <div className="cmt-content" dangerouslySetInnerHTML={makeComment(e)} />
         <div className="cmt-reply-box">
            <span className="cmt-btn-reply" data-grp={e.bgroup} data-dp={e.depth} data-board={e.board} onClick={onClickReply}>
               {!isExistReply(e).length ? "댓글달기" : isExistReply(e).length + "개의 댓글"}
            </span>
            <div className={`reply-depth ${`depth` + e.depth}`}>
               {depthReply.map((e, i) => (
                  <CmtItem key={i} e={e} csrf={csrf} list={list} setList={setList} postid={postid} />
               ))}
            </div>
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
      </CommentItmesComp>
   );
}

export default React.memo(CmtItem);
