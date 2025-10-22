import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(res.data);
        setPostData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);
  return (
    <div>
      <h3>post</h3>
      <ul>
        {/* {postData && postData.map()} */}
        {/* {postData.length > 0 ? postData.map(()=>{}) : !postData && <p>데이터가 없습니다.</p>} */}
        {postData.length > 0
          ? postData.map((item, i) => {
              return (
                <li key={i}>
                  {item.id}. {item.title}
                </li>
              );
            })
          : !postData && <p>데이터가 없습니다.</p>}
      </ul>
    </div>
  );
}

export default App;
