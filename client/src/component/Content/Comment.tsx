import React, { useEffect, useState } from "react";
import { CommentContainerComp, CommentInputItem } from "../../styled-comp";
import useCSRF from "../../useHooks/useCSRF";
import useComment from "../../useHooks/useComment";
import CommentItems from "./CommentItems";
import util from "../../lib/axios";
import { FaRegCommentDots } from "react-icons/fa";


function CommentContainer({ postid, topic }: { postid: string, topic: string }) {
   const csrf = useCSRF();
   const { list, getComment } = useComment();
   const [cmt, setCmt] = useState("");
   const [auth, setAuth] = useState({
      cmt_user: "",
      cmt_pwd: "",
   });

   useEffect(() => {
      getComment(postid);
   }, [postid]);


   const onChangeCmt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCmt(e.target.value);
   };

   const onChangeAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuth({
         ...auth,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };

   const onSubmit = async (e: any) => {
      if (cmt === "") return alert("글을 입력해주세요");
      if (!auth.cmt_pwd || !auth.cmt_pwd) return alert("댓글을 작성하시려면 아이디와 비밀번호를 입력해주세요");
      const grp = e.currentTarget.parentNode.parentNode.parentNode.dataset.grp;
      await util.saveComment(cmt, grp, topic, postid, auth.cmt_user, auth.cmt_pwd, csrf);
      getComment(postid);
      setCmt("");
      setAuth({
         cmt_user: "",
         cmt_pwd: "",
      });
   };

   if (list === null) return null;
   return (
      <CommentContainerComp data-grp={!list.length ? 1 : list[list.length - 1].bgroup + 1}>
         <div className="cmt-slo-box">
            <FaRegCommentDots className="cmt-icons" />
            <span className="cmt-slo">comment</span>
         </div>
         <CommentInputItem>
            <textarea placeholder="댓글을 입력해주세요." value={cmt} onChange={onChangeCmt} />
            <div className="cmt-login">
               <input type="text" name="cmt_user" value={auth.cmt_user} placeholder="이름" onChange={onChangeAuth} />
               <input type="password" name="cmt_pwd" value={auth.cmt_pwd} placeholder="비밀번호"
                      onChange={onChangeAuth} />
               <div className="cmt-submit-btn" onClick={onSubmit}>
                  <span>등록하기</span>
               </div>
            </div>
         </CommentInputItem>
         <div className="blank_space" />
         {!list.length ? null :
            list.filter((e, i) => {
               if (e.sorts === 0) return list[i];
            }).map((e, i) => (
               <CommentItems
                  key={i}
                  e={e}
                  csrf={csrf}
                  list={list}
                  getComment={getComment}
                  topic={topic}
                  postid={postid}
               />))}
         <div style={{ height: "120px" }} />
      </CommentContainerComp>
   );
}

export default React.memo(CommentContainer);