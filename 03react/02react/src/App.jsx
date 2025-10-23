import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    userid: '',
    useremail: '',
  });

  const eventHandler = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    // alert('회원가입완료');
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('이름을 입력하세요');
    }

    if (!formData.userid.trim()) {
      alert('아이디를 입력하세요');
    } else if (formData.userid.length < 4) {
      alert('아이디는 4자이상 입력하세요');
    }

    if (!formData.useremail.trim()) {
      alert('이메일을 입력하세요');
    }
  };
  return (
    <div>
      <div className="container">
        <h3>회원가입</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <label
              htmlFor="name"
              className="form-label"
              style={{ width: '100px' }}
            >
              이름 {formData.name}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="이름을 입력하세요"
              onChange={eventHandler}
            />
          </div>
          <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <label
              htmlFor="userId"
              className="form-label"
              style={{ width: '100px' }}
            >
              아이디
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userid"
              placeholder="아이디를 입력하세요"
              onChange={eventHandler}
            />
          </div>
          <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <label
              htmlFor="userEmail"
              className="form-label"
              style={{ width: '100px' }}
            >
              이메일
            </label>
            <input
              type="text"
              className="form-control"
              id="userEmail"
              name="useremail"
              placeholder="이메일을 입력하세요"
              onChange={eventHandler}
            />
          </div>
          <div className="text-end">
            <button className="btn btn-primary">회원가입완료</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
