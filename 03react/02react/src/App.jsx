import React from 'react';
import Button from './components/Button';
import ViewComp from './components/ViewComp';

function App() {
  return (
    <div>
      App
      <Button title="글작성" color="red" />
      <Button title="글보기" color="blue" />
      <Button title="글수정" color="pink" />
      <ViewComp />
      <Han />
    </div>
  );
}

function Han() {
  return (
    <>
      <h2>han</h2>
    </>
  );
}

export default App;
