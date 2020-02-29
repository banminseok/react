<<<<<<< HEAD
import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
=======
import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  console.log("state", state);
  return {
    ...state,
    [action.name]: action.value
  };
}
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;

  useEffect(() => {
    console.log("effect.");
    console.log(name);
    return () => {
      console.log("cleanup.");
      console.log(name);
    };
  });

  const onChange = e => {
    dispatch(e.target);
>>>>>>> 03da6a5060d0f3bb1ff732c85c9933ee49ba74e9
  };
  return (
    <div>
      <div>
<<<<<<< HEAD
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
=======
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
>>>>>>> 03da6a5060d0f3bb1ff732c85c9933ee49ba74e9
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
<<<<<<< HEAD
          <b>닉네임:</b> {nickname}
=======
          <b>닉네임 :</b> {nickname}
>>>>>>> 03da6a5060d0f3bb1ff732c85c9933ee49ba74e9
        </div>
      </div>
    </div>
  );
};

export default Info;
