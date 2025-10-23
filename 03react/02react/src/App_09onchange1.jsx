import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '홍길동',
    email: 'test@test.com',
    id: '',
    pwd: '',
    agree: false,
  });
  const eventHandler = (e) => {
    // console.log(e.target);
    const { name, value, type, checked } = e.target; // <input type="text" name="email" value="" checked>
    // console.log(name, value);
    setForm({ ...form, [name]: type == 'checkbox' ? checked : value });
    // setForm({ ...form, [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value });

    // setForm( {name: '홍길동', email: 'test@test.com',[e.target.name]:e.target.value})
  };

  // const arr = ['부산','서울']
  // arr    [1]

  // const han = {name:'test',content:'test1'}
  // han.name
  // han     ['name']

  return (
    <div>
      <h3>회원가입</h3>
      <p>
        {form.name} / {form.email} / {form.id} /
        {form.agree && <span>체크</span>} / {form.pwd}
      </p>
      <input
        type="text"
        name="name"
        onChange={eventHandler}
        placeholder="이름"
      />
      <br />
      <input
        type="text"
        name="email"
        onChange={eventHandler}
        placeholder="이메일"
      />
      <br />
      <input
        type="text"
        name="id"
        onChange={eventHandler}
        placeholder="아이디"
      />
      <br />
      <input
        type="text"
        name="pwd"
        onChange={eventHandler}
        placeholder="패스워드"
      />
      <br />
      회원가입을 문서를 확인
      <input type="checkbox" name="agree" onChange={eventHandler} />
      <br />
    </div>
  );
}

export default App;
