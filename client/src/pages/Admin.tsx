import React, { useRef, useState } from "react";
import { AdminLoginBoxComp } from "../styled-comp";
import util from "../lib/axios";
import useCSRF from "../useHooks/useCSRF";

function Admin({ history }: any) {
   const [user, setUser] = useState({
      id: "",
      pwd: "",
      number: "",
   });

   const [visivle, setVisible] = useState<boolean>(false);
   const [number, setNumber] = useState<number>(0);
   const [certification, setCertification] = useState<boolean>(false);
   const count = useRef(0);

   const csrf = useCSRF();

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(state => ({
         ...state,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = async () => {
      setVisible(true);
      const { data } = await util.adminLogin(user, csrf);
      console.log(user, data);
      if (!data.state) count.current++;
      else {
         setCertification(true);
      }
      setNumber(data.number);
   };

   const onCertificationPhone = async () => {
      if (parseInt(user.number, 10) === number && certification) {
         await util.setJwtToken(csrf);
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