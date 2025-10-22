import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // api data 가지고 오기
  // npm install axios -> npm i axios
  // useEffect에 axios.get('') 사용 async..await
  // api 경로 'https://jsonplaceholder.typicode.com/posts'

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // async function fetchApi(){
    //   const res = await fetch()
    // }

    // const fetch = async function(){
    //   const rest = await fetch()
    // }

    const fetchApi = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res.data);
      setPostData(res.data);
    };

    fetchApi();
  }, []);

  return (
    <div>
      App
      {postData &&
        postData.map((item, i) => {
          console.log(item);

          return (
            <div key={i}>
              {item.id}. {item.title}
            </div>
          );
        })}
    </div>
  );
}

export default App;
