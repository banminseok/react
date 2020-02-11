import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onclickEnter = () => setMessage("안녕하세요!");
  const onclickLeave = () => setMessage("안영히 가세요!");

  const [colorName, setColor] = useState("black");
  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickLeave}>퇴장</button>
      <h2 style={{ color: colorName }}>{message}</h2>
      <button onClick={() => setColor("red")}>빨간색</button>
      <button onClick={() => setColor("green")}>초록색</button>
      <button onClick={() => setColor("blue")}>파란색</button>
    </div>
  );
};

export default Say;
