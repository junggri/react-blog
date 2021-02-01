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
   const _certifi_num = useRef<HTMLInputElement>(null);

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
      setCertification(true);
      setNumber(data.number);
      if (_certifi_num.current !== null) {
         _certifi_num.current.focus();
      }
   };

   const onCertificationPhone = async () => {
      if (parseInt(user.number, 10) === number && certification) {
         const { data } = await util.setJwtToken(csrf);
         localStorage.setItem("_jt", data.token);
         history.push("/");
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
            <input type="text" value={user.number} name="number" onChange={onChange} ref={_certifi_num} />
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