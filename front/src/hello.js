import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial ? <b>*</b> : null} 안녕하세요{name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이릅;",
};

export default Hello;
