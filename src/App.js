import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집'; // 서버에서 가져온 데이터라고 가정
  let [titleList, setTitleList] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {titleList.map(item => {
        return (
          <div className="list">
            <h4>{item}</h4>
            <p>2월 17일 발행</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
