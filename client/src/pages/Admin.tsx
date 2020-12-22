import React, { useState } from "react";
import { AdminLoginBoxComp } from "../styled-comp";
import { ICommonModuleProps } from "../modules/Common/common.interface";
import useCommon from "../useHooks/useCommon";
import util from "../lib/axios";

function Admin() {
   const { token }: ICommonModuleProps = useCommon();

   const [user, setUser] = useState({
      id: "",
      pwd: "",
   });

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(state => ({
         ...state,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = async () => {
      await util.adminLogin(user, token);
   };

   return (
      <AdminLoginBoxComp>
         <div className="login-inputbox">
            <input type="text" name="id" value={user.id} placeholder="아이디" onChange={onChange} />
            <input type="password" name="pwd" value={user.pwd} placeholder="비밀번호" onChange={onChange} />
         </div>
         <button onClick={onSubmit}>
            인증시작하기
         </button>

      </AdminLoginBoxComp>
   );
}

export default Admin;