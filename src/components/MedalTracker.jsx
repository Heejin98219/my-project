import { useState } from "react";

/* 국가명, 금/ 은/ 동메달 넣을 훅*/
const MedalTracker = () => {
  const [nation, setNation] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  /* 사용자가 입력한 각 메달 수 넣을 배열 */
  const [userData, setUserData] = useState([]);

  // 국가명 onChange 함수
  const nationHandleInputChange = (e) => {
    setNation(e.target.value);
  };

  // 금메달 onChange 함수
  const goldMedalHandleInputChange = (e) => {
    setGoldMedal(e.target.value);
  };

  // 은메달 onChange 함수
  const silverMedalHandleInputChange = (e) => {
    setSilverMedal(e.target.value);
  };

  // 동메달 onChange 함수
  const BronzeMedalHandleInputChange = (e) => {
    setBronzeMedal(e.target.value);
  };

  // 추가 버튼 click 함수
  // 배열로 국가명, 금메달, 은메달, 동메달 추가
  const handleClick = () => {
    const addByUser = { nation, goldMedal, silverMedal, bronzeMedal };
    setUserData((prev) => {
      return [...prev, addByUser];
    });
  };

  return (
    <div>
      <>
        <div
          style={{
            border: "1px solid red",
          }}
        >
          <h1 className="title">올림픽 메달 트레커</h1>
          <br />
          <div className="tracker-container">
            <label>국가명</label>
            <input
              type="text"
              value={nation}
              onChange={(e) => nationHandleInputChange(e)}
            ></input>
            <label>금메달</label>
            <input
              type="text"
              value={goldMedal}
              onChange={(e) => goldMedalHandleInputChange(e)}
            ></input>
            <label>은메달</label>
            <input
              type="text"
              value={silverMedal}
              onChange={(e) => silverMedalHandleInputChange(e)}
            ></input>
            <label>동메달</label>
            <input
              type="text"
              value={bronzeMedal}
              onChange={(e) => BronzeMedalHandleInputChange(e)}
            ></input>
            <button onClick={(e) => handleClick(e)}>추가</button>
            <button>수정</button>
          </div>
        </div>
        {/* 값*/}
        <div className="grid">
          {userData.map(function (item) {
            return (
              <li key={item.nation}>
                {item.goldMedal},{item.silverMedal},{item.bronzeMedal}
              </li>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default MedalTracker;
