import React, { useState } from "react";
import { CommentInputItem, CommentItmesComp } from "../../styled-comp";
import util from "../../lib/axios";
import createDOMPurify from "dompurify";
import { HiCode } from "react-icons/hi";

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
   getComment: any
   postid: string
}

function CommentItem({ e, csrf, list, getComment, postid }: ICmtItem) {
   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;
   const [reply, setReply] = useState("");
   const [depthReply, setDepthReply] = useState([]);
   const [auth, setAuth] = useState({
      cmt_user: "",
      cmt_pwd: "",
   });


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
      const _list: any = list.filter((e, i) => e.bgroup === grp && e.depth === dp + 1 && e.parent === board);//그룹그리고 댑쓰, 부모가 같은 것믇 만 가져옵니다.
      if (!_list.length) {
         e.currentTarget.nextSibling.nextSibling.nextSibling.classList.toggle("visible");
      } else {
         e.currentTarget.nextSibling.nextSibling.classList.toggle("visible");
         e.currentTarget.nextSibling.classList.toggle("visible");
         if (e.currentTarget.nextSibling.nextSibling.nextSibling.classList.contains("visible")) {
            e.currentTarget.nextSibling.nextSibling.nextSibling.classList.remove("visible");
            e.currentTarget.nextSibling.nextSibling.textContent = "댓글 달기";
         }
      }
      setDepthReply(_list);
   };

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
      if (!auth.cmt_pwd || !auth.cmt_pwd) return alert("댓글을 작성하시려면 아이디와 비밀번호를 입력해주세요");
      const replyBox = e.currentTarget.parentNode.parentNode.parentNode;
      replyBox.classList.remove("visible");
      const depth = e.currentTarget.dataset.dp;
      const sort = e.currentTarget.dataset.sorts;
      const grp = e.currentTarget.dataset.grp;
      const bn = e.currentTarget.dataset.board;
      await util.saveReply(reply, Number(bn), Number(grp), Number(sort), Number(depth), postid, auth.cmt_user, auth.cmt_pwd, csrf);
      getComment(postid);
      const _list: any = list.filter((e: ICommnet) => e.bgroup === Number(grp) && e.sorts >= Number(sort) && Number(bn) === e.parent);
      setDepthReply(_list);
      setReply("");
      setAuth({
         cmt_user: "",
         cmt_pwd: "",
      });
   };

   const onChangeAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuth({
         ...auth,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };

   return (
      <CommentItmesComp depth={Number(e.depth) + 1} className={`depth` + (Number(e.depth) + 1)}>
         <div className="cmt-whoami">
            <img src="/images/og.jpg" alt="" />
            <div className="cmt-whoami-sub">
               <span className="cmt-writer">익명</span>
               <span className="cmt-created">123123</span>
            </div>
         </div>
         <div className="cmt-content" dangerouslySetInnerHTML={makeComment(e)} />
         <div className="cmt-reply-box">
            <div className="cmt-btn-reply" data-grp={e.bgroup} data-dp={e.depth} data-board={e.board} onClick={onClickReply}>
               <HiCode className="reply-icons" />
               {!isExistReply(e).length ? <span>댓글달기</span> : <span>{isExistReply(e).length + "개의 댓글"}</span>}
            </div>
            <div className="reply-depth">
               {depthReply.map((e, i) => (
                  <CommentItem
                     key={i}
                     e={e}
                     csrf={csrf}
                     list={list}
                     getComment={getComment}
                     postid={postid}
                  />
               ))}
            </div>
            <div className="depth-reply-btn" onClick={onClickDepthReplyBtn}>댓글 달기</div>
            <div className="depth-reply-box">
               <CommentInputItem>
                  <textarea placeholder="댓글을 입력해주세요." value={reply} onChange={onChangeReply} />
                  <div className="cmt-login">
                     <input type="text" name="cmt_user" value={auth.cmt_user} placeholder="이름" onChange={onChangeAuth} />
                     <input type="password" name="cmt_pwd" value={auth.cmt_pwd} placeholder="비밀번호" onChange={onChangeAuth} />
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

export default React.memo(CommentItem);
