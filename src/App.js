import { useState } from 'react';
import './App.css';

function App() {
  const [title, setListTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [likeCnt, setLikeCnt] = useState(0);

  function sortingListTitle() {
    let sortingTitle = [...title].sort();

    setListTitle(sortingTitle);
  }
  
  function changeListTitle() {
    let copyTitle = [...title];
        copyTitle[0] = '여자 코트 추천';

    setListTitle(copyTitle);
  }

  return (
    <div className="App">
      <div className="nav-bk">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={sortingListTitle}>가나다순 정렬하기</button>
      <button onClick={changeListTitle}>타이틀 변경하기</button>
      <div className="list">
        <h4>{title[0]} <button className="btn-ico" onClick={() => setLikeCnt(likeCnt + 1)}>👍</button> {likeCnt}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
