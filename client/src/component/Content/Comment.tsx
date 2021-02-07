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

function CommentContainer({ postid }: { postid: string }) {
   const csrf = useCSRF();
   const [cmt, setCmt] = useState("");
   const [list, setList] = useState<ICommnet[]>([]);
   const [auth, setAuth] = useState({
      cmt_user: "",
      cmt_pwd: "",
   });


   useEffect(() => {
      (async () => {
         const { data } = await util.getComment(postid);
         setList(data.result);
      })();
   }, []);

   const cmtDepthZero = list.filter((e, i) => {
      if (e.sorts === 0) return list[i];
   });

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
      const grp = e.currentTarget.parentNode.parentNode.dataset.grp;
      await util.saveComment(cmt, grp, postid, auth.cmt_user, auth.cmt_pwd, csrf);
      const { data } = await util.getComment(postid);
      setCmt("");
      setList(data.result);
      setAuth({
         cmt_user: "",
         cmt_pwd: "",
      });
   };


   return (
      <CommentContainerComp data-grp={!list.length ? 1 : list[list.length - 1].bgroup + 1}>
         <CommentInputItem>
            <textarea placeholder="댓글을 입력해주세요." value={cmt} onChange={onChangeCmt} />
            <div className="cmt-login">
               <input type="text" name="cmt_user" value={auth.cmt_user} placeholder="이름" onChange={onChangeAuth} />
               <input type="password" name="cmt_pwd" value={auth.cmt_pwd} placeholder="비밀번호" onChange={onChangeAuth} />
               <div className="cmt-submit-btn" onClick={onSubmit}>
                  <span>등록하기</span>
               </div>
            </div>
         </CommentInputItem>
         <div className="blank_space" />
         {list.length !== 0 && cmtDepthZero.map((e, i) => (
            <CommentItems
               key={i}
               e={e}
               csrf={csrf}
               list={list}
               setList={setList}
               postid={postid}
            />))}
         <div style={{ height: "120px" }}></div>
      </CommentContainerComp>
   );
}

export default React.memo(CommentContainer);