import React, { useEffect, useMemo, useState } from "react";
import { CommentContainerComp } from "@src/styledComponent";
import { CommentItem } from "@src/component";
import { ICommentRefObject, ICommentValue, ISaveCommentProps } from "@src/globalInterface";
import { ICommonModuleProps } from "@modules/Common/common.interface";
import useCSRF from "@useHooks/useCSRF";
import useComment from "@useHooks/useComment";
import useCommon from "@useHooks/useCommon";
import util from "@lib/axios";
import { IComment } from "@modules/Comment/cmtInterface";
import { AiOutlineComment } from "react-icons/ai";

interface ICommentCotainer {
   topic: string,
   postId: string,
   contentName: string
}


const CommentContainer = ({ topic, postId, contentName }: ICommentCotainer) => {
   const csrf = useCSRF();
   const { list, getComment } = useComment();
   const { setNewRequset }: ICommonModuleProps = useCommon();
   const [commentValue, setCommentValue] = useState<ICommentValue>({
      value: "",
      cmtName: "",
      cmtPwd: "",
   });

   const commentList: React.RefObject<ICommentRefObject>[] | undefined = useMemo(() => list?.map(() => React.createRef()), [list]);

   useEffect(() => {
      getComment(postId);
   }, [postId]);

   const onChangeCommentValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCommentValue({
         ...commentValue,
         [e.target.name]: e.target.value,
      });
   };

   const onSubmitComment = async () => {
      if (!commentValue.cmtPwd || !commentValue.value || !commentValue.cmtName) alert("정보를 입력해주세요.");
      if (csrf && list) {
         const group: number = !list.length ? 1 : list[list.length - 1].bgroup + 1;
         const saveData: ISaveCommentProps = {
            value: commentValue.value,
            user: commentValue.cmtName,
            pwd: commentValue.cmtPwd,
            group,
            topic,
            postId,
            contentName,
         };
         await util.saveComment(saveData, csrf);
      }
      setCommentValue({
         value: "",
         cmtName: "",
         cmtPwd: "",
      });
      getComment(postId);
      setNewRequset(true);
   };

   const depthZeroComment = useMemo(() => list?.filter(e => e.sorts === 0), [list]);

   if (!commentList) return null;
   return (
      <>
         <CommentContainerComp>
            <header className="comment__header-box">
               <h1><span><AiOutlineComment /></span>{list?.length} 개의 댓글이 있습니다.</h1>
            </header>
            <section className="comment-parent-input-box">
               <textarea name="value" value={commentValue.value} placeholder="댓글을 입력해주세요." className="cmt__value-input" onChange={onChangeCommentValue} />
               <div className="comment__user_data_box">
                  <div className="comment__user_data">
                     <input type="text" name="cmtName" value={commentValue.cmtName} placeholder="작성자" onChange={onChangeCommentValue} />
                     <input type="password" name="cmtPwd" value={commentValue.cmtPwd} placeholder="비밀번호" onChange={onChangeCommentValue} />
                  </div>
                  <button onClick={onSubmitComment}>등록하기</button>
               </div>
            </section>
            {csrf && list && depthZeroComment?.map((e: IComment, i: number) =>
               <CommentItem
                  data={e}
                  topic={topic}
                  postId={postId}
                  token={csrf}
                  list={list}
                  ref={commentList[i]}
                  getComment={getComment}
                  setNewRequset={setNewRequset}
               />)}
         </CommentContainerComp>
         <div style={{ height: "100px" }} />
      </>
   );
};
export default React.memo(CommentContainer);