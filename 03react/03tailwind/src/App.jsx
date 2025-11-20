import React, { useEffect } from 'react';
import { useBoard } from './context/BoardContext';

function App() {
  const { boardData, fetchData, totalCount } = useBoard();

  useEffect(() => {
    fetchData(0, 2);
  }, []);

  return (
    <div>
      <h3>board / 총 게시물 {totalCount} 개</h3>
      {boardData &&
        boardData.map((item, i) => {
          return (
            <div key={i}>
              {item.id} / {item.title} / {item.content}
            </div>
          );
        })}
    </div>
  );
}

export default App;
