import React, { RefObject, useState } from "react";
import { CommentItemComp } from "@src/styledComponent";
import { AiOutlineComment, AiOutlineMinusSquare } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { ICommentProps, ICommentRefObject, IReplyProps } from "@src/globalInterface";
import createDOMPurify from "dompurify";
import { IComment } from "@modules/Comment/cmtInterface";
import util from "@lib/axios";


const CommentItem = React.forwardRef<React.RefObject<ICommentRefObject>, ICommentProps>((props, ref) => {
   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;
   const inputRef = React.useRef<HTMLTableSectionElement>(null);
   const preInputRef = React.useRef<HTMLTableSectionElement>(null);
   const [depthComment, setDepthComment] = useState<IComment[]>([]);
   const [click, setClick] = useState<boolean>(false);
   const [replyValue, setReplyValue] = useState<IReplyProps>({
      value: "",
      user: "",
      pwd: "",
   });

   const findDepthComment = (board: number, arr: number[]): number[] => {
      const _list = props.list.filter(e => e.parent === board);
      _list.forEach(e => {
         arr.push(e.board);
         findDepthComment(e.board, arr);
      });
      return arr;
   };

   const makeComment = (e: IComment) => ({
      __html: typeof window === "object" ? (DOMPurify as any).sanitize(e.cmt) : null,
   });


   const onChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setReplyValue({
         ...replyValue,
         [e.target.name]: e.target.value,
      });
   };

   const onSubmitReply = async (e: React.MouseEvent, ref: RefObject<HTMLDivElement>, data: IComment) => {
      if (!replyValue.pwd || !replyValue.user || !replyValue.value) return alert(" 정보를 입력 해주세요");
      if (ref) {
         // console.log(inputRef.current);
         // console.log(data);
         // console.log(ref.current);
         const saveData = {
            value: replyValue.value,
            user: replyValue.user,
            pwd: replyValue.pwd,
            board: data.board,
            grorp: data.bgroup,
            sorts: data.sorts,
            depth: data.depth,
            topic: props.topic,
            postId: props.postId,
         };
         await util.saveReply(saveData, props.token);
         props.getComment(props.postId);
         setReplyValue({
            value: "",
            user: "",
            pwd: "",
         });
      }
   };

   const onClickReplyBtn = () => {
      const _list = props.list.filter((e, i) => e.bgroup === props.data.bgroup && e.depth === props.data.depth + 1 && e.parent === props.data.board);
      setClick(!click);
      setDepthComment(_list);
      if (inputRef.current && preInputRef.current)
         _list.length ? preInputRef.current.style.display = "block" : inputRef.current.style.display = "block";
   };

   const onClickCancelBtn = () => {
      setClick(!click);
      if (inputRef.current && preInputRef.current) {
         setDepthComment([]);
         inputRef.current.style.display = "";
         preInputRef.current.style.display = "";
      }
   };

   const onClickPreInputRefBox = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if ((e.target as HTMLButtonElement).textContent === "댓글달기" && inputRef.current && preInputRef.current) {
         // (e.target as HTMLButtonElement).textContent = "접기";
         inputRef.current.style.display = "block";
         preInputRef.current.style.display = "";
      } else if (inputRef.current) {
         (e.target as HTMLButtonElement).textContent = "댓글달기";
         inputRef.current.style.display = "";
      }
   };

   const onClickcancelBtn = () => {
      if (preInputRef.current && inputRef.current) {
         preInputRef.current.style.display = "block";
         inputRef.current.style.display = "";
      }
   };

   const childCommentCount = (board: number): number[] => {
      const childCommentArr: number[] = [];
      return findDepthComment(board, childCommentArr);
   };


   return (
      <CommentItemComp ref={ref as RefObject<HTMLDivElement>} depth={props.data.depth} className={"depth" + props.data.depth}>
         <section className="comment_item_userBox">
            <span className="user_metaData-username"><AiOutlineComment className="username-icons" />{props.data.writer}</span>
            <span className="user_metaData-date">{props.data.created}</span>
         </section>
         <section className="comment__data">
            <article dangerouslySetInnerHTML={makeComment(props.data)} />
         </section>
         <footer>
            {!click
               ?
               <div className="add-comment_btn" onClick={onClickReplyBtn}>
                  {childCommentCount(props.data.board).length
                     ?
                     <>
                        <span className="add-comment_btn_icon"><FiPlusCircle /></span>
                        <span>{childCommentCount(props.data.board).length}개의 댓글</span>
                     </>
                     :
                     <>
                        <span className="add-comment_btn_icon"><FiPlusCircle /></span>
                        <span>댓글추가하기</span>
                     </>
                  }
               </div>
               :
               <div className="cancel_comment-btn" onClick={onClickCancelBtn}>
                  <span>
                     <AiOutlineMinusSquare className="cancel-comment_btn_icon" />
                  </span>
                  <span>취소하기</span>
               </div>
            }
         </footer>
         {depthComment.map(e => (
            <CommentItem
               data={e}
               topic={props.topic}
               postId={props.postId}
               token={props.token}
               list={props.list}
               setNewRequset={props.setNewRequset}
               getComment={props.getComment}
            />
         ))}
         <section className="commnet__reply-box-exist" ref={preInputRef} onClick={onClickPreInputRefBox}>
            <button>댓글달기</button>
         </section>
         <section className="comment__reply-box" ref={inputRef}>
            <textarea name="value" value={replyValue.value} placeholder="댓글을 입력해주세요." className="cmt__value-input" onChange={onChangeValue} />
            <div className="comment__user_data_box">
               <div className="comment__user_data">
                  <input type="text" name="user" value={replyValue.user} placeholder="작성자" onChange={onChangeValue} />
                  <input type="text" name="pwd" value={replyValue.pwd} placeholder="비밀번호" onChange={onChangeValue} />
               </div>
               <div className="comment__reply-btn-box">
                  <button onClick={onClickcancelBtn}>취소</button>
                  <button onClick={(e: React.MouseEvent) => onSubmitReply(e, ref as RefObject<HTMLDivElement>, props.data)}>등록하기</button>
               </div>
            </div>
         </section>
      </CommentItemComp>
   );
});

export default React.memo(CommentItem);