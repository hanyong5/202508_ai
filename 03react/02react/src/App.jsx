import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '홍길동',
    email: 'test@test.com',
    id: '',
    agree: false,
  });
  const eventHandler = (e) => {
    console.log(e.target);
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: type == 'checkbox' ? checked : value });

    // setForm( {name: '홍길동', email: 'test@test.com',["name"]:e.target.value})
  };

  // const arr = ['부산','서울']
  // arr[1]

  // const han = {name:'test',content:'test1'}
  // han.name
  // han['name']

  return (
    <div>
      <h3>input</h3>
      <p>
        {form.name} / {form.email} / {form.id} /
        {form.agree && <span>체크</span>}
      </p>
      <input type="text" name="name" onChange={eventHandler} />
      <br />
      <input type="text" name="email" onChange={eventHandler} />
      <br />
      <input type="text" name="id" onChange={eventHandler} />
      <br />
      <input type="checkbox" name="agree" onChange={eventHandler} />
      <br />
    </div>
  );
}

export default App;
