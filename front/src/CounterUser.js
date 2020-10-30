import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input type="text" name="username" placeholder="계정먕" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
