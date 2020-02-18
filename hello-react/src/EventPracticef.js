import React, { useState } from "react";

const EventPracticef = () => {
  const [form, setForm] = useState({
    username2: "",
    message2: ""
  });
  const { username2, message2 } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick2 = () => {
    alert(username2 + ":" + message2);
    setForm({
      username2: "",
      message2: ""
    });
  };
  const onKeyPress2 = e => {
    if (e.key === "Enter") {
      onClick2();
    }
  };
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자명."
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해 보세요."
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      <br />
      <input
        type="text"
        name="username2"
        value={form.username2}
        placeholder="사용자명."
        onChange={onChange}
      />
      <input
        type="text"
        name="message2"
        value={message2}
        placeholder="아무거나 입력해 보세요."
        onChange={onChange}
        onKeyPress={onKeyPress2}
      />
      <button onClick={onClick2}>확인2</button>
    </div>
  );
};

export default EventPracticef;
