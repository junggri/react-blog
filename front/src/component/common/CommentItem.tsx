import React, { RefObject, useState } from "react";
import { CommentItemComp } from "@src/styledComponent";
import { AiOutlineComment, AiOutlineMinusSquare } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { ICommentProps, ICommentRefObject, ICommentUserData, IReplyProps } from "@src/globalInterface";
import createDOMPurify from "dompurify";
import { IComment } from "@modules/Comment/cmtInterface";
import util from "@lib/axios";
import { RiDeleteBack2Line } from "react-icons/ri";

interface ICommentInitial<T> {
   reply: {
      value: T,
      user: T
      pwd: T
   },
   deleteData: {
      user: T,
      pwd: T
   }
}

const initial: ICommentInitial<string> = {
   reply: {
      value: "",
      user: "",
      pwd: "",
   },
   deleteData: {
      user: "",
      pwd: "",
   },
};

const CommentItem = React.forwardRef<React.RefObject<ICommentRefObject>, ICommentProps>((props, ref) => {
   const DOMPurify = typeof window === "object" ? createDOMPurify(window) : () => false;
   const inputRef = React.useRef<HTMLTableSectionElement>(null);
   const preInputRef = React.useRef<HTMLTableSectionElement>(null);
   const [depthComment, setDepthComment] = useState<IComment[]>([]);
   const [click, setClick] = useState<boolean>(false);
   const [replyValue, setReplyValue] = useState<IReplyProps>(initial.reply);
   const [deleteValue, setDeleteValue] = useState<ICommentUserData>(initial.deleteData);

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

   const onChangeDeleteValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDeleteValue({
         ...deleteValue,
         [e.target.name]: e.target.value,
      });
   };

   const onSubmitReply = async (e: React.MouseEvent, data: IComment): Promise<void> => {
      if (!replyValue.pwd || !replyValue.user || !replyValue.value) return alert(" 정보를 입력 해주세요");
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
      const result: any = await util.saveReply(saveData, props.token);
      const _list = result.data.comment.data.filter((e: IComment) =>
         e.bgroup === data.bgroup
         && e.sorts >= data.sorts
         && e.parent === data.board
         && e.depth === data.depth + 1,
      );
      if (inputRef.current && preInputRef.current) {
         inputRef.current.style.display = "";
         preInputRef.current.style.display = "block";
      }
      setDepthComment(_list);
      props.setNewRequset(true);
      props.getComment(props.postId);
      setReplyValue(initial.reply);
   };

   const onClickReplyBtn = (): void => {
      const _list = props.list.filter((e, i) => e.bgroup === props.data.bgroup && e.depth === props.data.depth + 1 && e.parent === props.data.board);
      setClick(!click);
      setDepthComment(_list);
      if (inputRef.current && preInputRef.current)
         _list.length ? preInputRef.current.style.display = "block" : inputRef.current.style.display = "block";
   };

   const onClickCancelBtn = (): void => {
      setClick(!click);
      if (inputRef.current && preInputRef.current) {
         setDepthComment([]);
         // inputRef.current.style.display = "";
         preInputRef.current.style.display = "";
      }
   };

   const onClickPreInputRefBox = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if ((e.target as HTMLButtonElement).textContent === "댓글달기" && inputRef.current && preInputRef.current) {
         inputRef.current.style.display = "block";
         preInputRef.current.style.display = "";
      } else if (inputRef.current) {
         (e.target as HTMLButtonElement).textContent = "댓글달기";
         inputRef.current.style.display = "";
      }
   };

   const onClickcancelBtn = (): void => {
      if (preInputRef.current && inputRef.current) {
         preInputRef.current.style.display = "block";
         inputRef.current.style.display = "";
      }
   };

   const childCommentCount = (board: number): number[] => {
      const childCommentArr: number[] = [];
      return findDepthComment(board, childCommentArr);
   };


   const onClickDeleteCommentBtn = (e: React.MouseEvent): void => {
      (e.currentTarget.nextSibling as HTMLDivElement).classList.toggle("visible");
   };


   const deleteComment = async (e: React.MouseEvent): Promise<void> => {
      const target = e.currentTarget.parentNode?.parentNode?.parentNode as HTMLDivElement;
      const deleteArr: number[] = [];
      const data: number[] = findDepthComment(props.data.board, deleteArr);
      const sendData = {
         board: props.data.board,
         user: deleteValue.user,
         pwd: deleteValue.pwd,
         topic: props.topic,
         postsId: props.postId,
         deleteArr: [...data, props.data.board],
      };
      const result = await util.deleteComment(sendData, props.token);
      result.data.state
         ? target.style.display = "none"
         : alert("정보가 일치하지 않습니다.");
      setDeleteValue(initial.deleteData);
      props.getComment(props.postId);
      props.setNewRequset(true);
   };


   return (
      <CommentItemComp ref={ref as RefObject<HTMLDivElement>} depth={props.data.depth} className={"depth" + props.data.depth}>
         <section className="comment_item_userBox">
            <span className="user_metaData-username"><AiOutlineComment className="username-icons" />{props.data.writer}</span>
            <span className="user_metaData-date">{props.data.created}</span>
            <span className="delete_comment-btn" onClick={onClickDeleteCommentBtn}>
               <RiDeleteBack2Line />
            </span>
            <div className="delete-user-data">
               <input type="text" name="user" onChange={onChangeDeleteValue} placeholder="작성자" />
               <input type="password" name="pwd" onChange={onChangeDeleteValue} placeholder="암호" />
               <button onClick={deleteComment}>
                  <span>삭제</span>
               </button>
            </div>
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
            <div className="comment__user_data_box comment__item_user_data_box">
               <div className="comment__user_data comment__item__user_data">
                  <input type="text" name="user" value={replyValue.user} placeholder="작성자" onChange={onChangeValue} />
                  <input type="password" name="pwd" value={replyValue.pwd} placeholder="비밀번호" onChange={onChangeValue} />
               </div>
               <div className="comment__reply-btn-box">
                  <button onClick={onClickcancelBtn}>취소</button>
                  <button onClick={(e: React.MouseEvent) => onSubmitReply(e, props.data)}>등록하기</button>
               </div>
            </div>
         </section>
      </CommentItemComp>
   );
});

export default React.memo(CommentItem);