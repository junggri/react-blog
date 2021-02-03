import React, { useState } from "react";
import { CommentContainerComp, CommentInputItem, CommentItmesComp } from "../../styled-comp";
import useCSRF from "../../useHooks/useCSRF";
import util from "../../lib/axios";

function CommentContainer() {
   const csrf = useCSRF();
   const [reply, setReply] = useState(false);
   const [cmt, setCmt] = useState("");

   const onReplyClick = (e: any) => {
      console.log(e.currentTarget.parentNode.parentNode);
      e.currentTarget.nextSibling.classList.toggle("visible");
      setReply(!reply);
   };

   const onChangeCmt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCmt(e.target.value);
   };

   const onSubmit = async () => {
      await util.saveComment(cmt, csrf);
   };

   return (
      <CommentContainerComp>
         <CommentInputItem>
            <textarea placeholder="댓글을 입력해주세요." onChange={onChangeCmt} />
            <div className="cmt-login">
               <input type="text" name="cmt-user" placeholder="이름" />
               <input type="password" name="cmt-pwd" placeholder="비밀번호" />
               <div className="cmt-submit-btn" onClick={onSubmit}>
                  <span>등록하기</span>
               </div>
            </div>
         </CommentInputItem>

         <CommentItmesComp data-id="a">
            <div className="cmt-whoami">
               <img src="/images/og.jpg" alt="" />
               <div className="cmt-whoami-sub">
                  <span className="cmt-writer">익명</span>
                  <span className="cmt-created">123123</span>
               </div>
            </div>
            <div className="cmt-content">테스ㅡ 중입니다</div>
            <div className="cmt-replyBox">
               <span className="cmt-btn-reply" onClick={onReplyClick}>답글달기</span>
               <div className="reply-box" data-id="a">
                  <CommentInputItem>
                     <textarea placeholder="댓글을 입력해주세요." />
                     <div className="cmt-login">
                        <input type="text" name="cmt-user" placeholder="이름" />
                        <input type="password" name="cmt-pwd" placeholder="비밀번호" />
                        <div className="cmt-submit-btn" onClick={onSubmit}>
                           <span>등록하기</span>
                        </div>
                     </div>
                  </CommentInputItem>
               </div>

            </div>
         </CommentItmesComp>

         <CommentItmesComp data-id="b">
            <div className="cmt-whoami">
               <img src="/images/og.jpg" alt="" />
               <div className="cmt-whoami-sub">
                  <span className="cmt-writer">익명</span>
                  <span className="cmt-created">123123</span>
               </div>
            </div>
            <div className="cmt-content">테스ㅡ 중입니다</div>
            <div className="cmt-replyBox">
               <span className="cmt-btn-reply" onClick={onReplyClick}>답글달기</span>
               <div className="reply-box" data-id="b">
                  <CommentInputItem>
                     <textarea placeholder="댓글을 입력해주세요." />
                     <div className="cmt-login">
                        <input type="text" name="cmt-user" placeholder="이름" />
                        <input type="password" name="cmt-pwd" placeholder="비밀번호" />
                        <div className="cmt-submit-btn">
                           <span>등록하기</span>
                        </div>
                     </div>
                  </CommentInputItem>
               </div>

            </div>
         </CommentItmesComp>


      </CommentContainerComp>
   );
}

export default React.memo(CommentContainer);