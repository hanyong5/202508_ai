import React, { useState } from 'react';

function App() {
  // const view = '안녕하세요';

  const [view, setView] = useState('안녕하세요');

  return (
    <div style={{ border: '1px solid #000' }} className="p-3">
      <h3>Context Api</h3>
      <ChildComp view={view} setView={setView} />
    </div>
  );
}

function ChildComp({ view, setView }) {
  return (
    <div style={{ border: '1px solid #000' }} className="p-3">
      <h3>child</h3>
      {/* <p>{view}</p> */}
      <ChildOneComp view={view} setView={setView} />

      {/* <button
        onClick={() => {
          setView('만나서 반갑습니다.');
        }}
      >
        클릭
      </button> */}
    </div>
  );
}

function ChildOneComp({ view, setView }) {
  return (
    <div style={{ border: '1px solid #000' }} className="p-3">
      <h3>child one</h3>
      <p>{view}</p>

      <button
        onClick={() => {
          setView('홍길동님 반갑습니다.');
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App;
