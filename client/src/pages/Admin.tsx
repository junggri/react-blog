import React, { useRef, useState } from "react";
import { AdminLoginBoxComp } from "../styled-comp";
import util from "../lib/axios";
import useCSRF from "../useHooks/useCSRF";

function Admin({ match, history }: any) {
   const [user, setUser] = useState({
      id: "jjuu6933",
      pwd: "wowwjd12!@",
      number: "1",
   });

   const [visivle, setVisible] = useState<boolean>(false);
   const [number, setNumber] = useState<number>(0);
   const [certification, setCertification] = useState<boolean>(false);
   const count = useRef(0);


   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(state => ({
         ...state,
         [e.target.name]: e.target.value,
      }));
   };
   const csrf = useCSRF();
   const onSubmit = async () => {
      // console.log(count.current);TODO 3번이상일때 디비에 잠금걸자.
      const { data } = await util.adminLogin(user, csrf);
      if (!data.state) count.current++;
      else {
         setCertification(true);
      }
      setVisible(true);
      setNumber(data.number);
   };

   const onCertificationPhone = async () => {
      if (parseInt(user.number) === number && certification) {
         await util.setToken(csrf);
         history.push("/");
      } else {
         count.current++;
      }
   };


   return (
      <AdminLoginBoxComp>
         <div className="login-inputbox">
            <input type="text" name="id" value={user.id} placeholder="아이디" onChange={onChange} />
            <input type="password" name="pwd" value={user.pwd} placeholder="비밀번호" onChange={onChange} />
         </div>
         {visivle &&
         <div className="certification-numberBox">
            <input type="text" value={user.number} name="number" onChange={onChange} />
            <button onClick={onCertificationPhone}>
               확인하기
            </button>
         </div>
         }
         <button className="login-btn" onClick={onSubmit}>
            인증시작하기
         </button>
      </AdminLoginBoxComp>
   );
}

export default Admin;