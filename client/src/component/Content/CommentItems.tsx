import React, { useState } from "react";
import { CommentInputItem, CommentItmesComp } from "../../styled-comp";
import util from "../../lib/axios";
import createDOMPurify from "dompurify";
import { HiCode } from "react-icons/hi";
import { FiDelete } from "react-icons/fi";

interface ICommnet {
   board: number
   bgroup: number
   parent: number
   sorts: number
   depth: number
   cmt: string
   writer: string
   created: string
}

interface ICmtItem {
   e: ICommnet,
   csrf: string,
   list: ICommnet[]
   getComment: any
   topic: string
   postid: string
   setNewRequset: any
}

function CommentItem({ e, csrf, list, getComment, topic, postid, setNewRequset }: ICmtItem) {
   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;
   const [reply, setReply] = useState("");
   const [depthReply, setDepthReply] = useState([]);
   const [cmtData, setCmtData] = useState({ delete_cmt_user: "", delete_cmt_pwd: "" });
   const [auth, setAuth] = useState({ cmt_user: "", cmt_pwd: "" });

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
      const { data } = await util.saveReply(reply, Number(bn), Number(grp), Number(sort), Number(depth), topic, postid, auth.cmt_user, auth.cmt_pwd, csrf);
      const _list: any = data.comment.filter(
         (e: ICommnet) =>
            e.bgroup === Number(grp)
            && e.sorts >= Number(sort)
            && e.parent === Number(bn)
            && e.depth === Number(depth) + 1,
      );
      setDepthReply(_list);
      setReply("");
      getComment(postid);
      setNewRequset(true);
      setAuth({ cmt_user: "", cmt_pwd: "" });
   };

   const onChangeAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuth({
         ...auth,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };


   const deleteComment = async (e: any) => {
      const deleteArr: number[] = [];
      const board = e.currentTarget.dataset.board;
      const parent = e.currentTarget.dataset.pr;
      deleteArr.push(Number(board));
      if (e.currentTarget.dataset.dp > 0) {
         e.currentTarget.parentNode.parentNode.parentNode.nextSibling.classList.toggle("visible");
      }
      e.currentTarget.parentNode.parentNode.parentNode.classList.toggle("visible");

      function findDepth(board: number, parent: number) {
         const _list = list.filter(e => e.parent === Number(board));
         _list.forEach(e => {
            deleteArr.push(e.board);
            findDepth(Number(e.board), Number(e.parent));
         });
      }

      findDepth(Number(board), Number(parent));
      const { data } = await util.deleteComment(cmtData.delete_cmt_user, cmtData.delete_cmt_pwd, board, topic, postid, deleteArr, csrf);
      setNewRequset(true);
      data.state ? getComment(postid) : alert("잘못된 정보입니다.");
   };

   const showDeleteBox = (e: any) => {
      e.currentTarget.nextSibling.classList.toggle("visible");
   };

   const onChangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCmtData({
         ...cmtData,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };

   return (
      <CommentItmesComp depth={Number(e.depth) + 1} className={`depth` + (Number(e.depth) + 1)}>
         <div className="cmt-whoami">
            <img src="/images/og.jpg" alt="" />
            <div className="cmt-whoami-sub">
               <span className="cmt-writer">{e.writer}</span>
               <span className="cmt-created">{e.created}</span>
            </div>
            <div className="cmt-delete-icons" onClick={showDeleteBox}>
               <FiDelete />
            </div>
            <div className="cmt-delete-box">
               <div className="cmt-delete-inputbox">
                  <input type="text" name="delete_cmt_user" value={cmtData.delete_cmt_user} placeholder="작성자" onChange={onChangeDelete} />
                  <input type="password" name="delete_cmt_pwd" value={cmtData.delete_cmt_pwd} placeholder="비밀번호" onChange={onChangeDelete} />
                  <div className="delete-btn" onClick={deleteComment} data-pr={e.parent} data-grp={e.bgroup} data-dp={e.depth} data-board={e.board}>삭제하기</div>
               </div>
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
                     setNewRequset={setNewRequset}
                     topic={topic}
                     postid={postid}
                  />
               ))}
            </div>
            <div className="depth-reply-btn" onClick={onClickDepthReplyBtn}>댓글 달기</div>
            <div className="depth-reply-box">
               <CommentInputItem>
                  <textarea placeholder="댓글을 입력해주세요." value={reply} onChange={onChangeReply} />
                  <div className="cmt-login">
                     <input type="text" name="cmt_user" value={auth.cmt_user} placeholder="이름"
                            onChange={onChangeAuth} />
                     <input type="password" name="cmt_pwd" value={auth.cmt_pwd} placeholder="비밀번호"
                            onChange={onChangeAuth} />
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
