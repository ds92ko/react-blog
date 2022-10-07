import { useState } from 'react';
import './App.css';

function App() {
  const [title, setListTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [likeCnt, setLikeCnt] = useState(0);
  const [openModal, setOpenModal] = useState(false);

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
      <div className="list">
        <h4>{title[0]} <button className="btn-ico" onClick={() => setLikeCnt(likeCnt + 1)}>👍</button> {likeCnt}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => setOpenModal(!openModal)}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {openModal && <Modal />}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
