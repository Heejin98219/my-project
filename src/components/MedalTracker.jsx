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

  // 삭제 버튼 click 함수
  // 해당 국가를 제외한 배열을 만듦
  const handleDeleteNation = (name) => {
    const filteredData = userData.filter((item) => item.nation !== name);
    // nation 값이 일치하지 않는 항목들만 남긴 새로운 배열을 만듦
    setUserData(filteredData);
  };
  // name: 삭제하려는 특정 국가명
  // userData: 여러 국가와 + 국가의 메달 정보 (→ 행)
  // filter(): 조건에 맞는 항목들만 배열로 반환
  // 클릭한 국가 + 동일한 국가만 배열에서 삭제
  // 나머지는 그대로 남아있음

  // 수정 버튼 click 함수
  // nation 값이 현재 입력된 국가명과 일치하는 항목을 찾음
  const handleUpdateNation = () => {
    // nation 값이 일치하면 입력된 값으로 해당 항목을 업데이트
    const updatedData = userData.find((item) => item.nation === nation);
    // 사용자가 입력한 국가명과 일치하는 항목이 있다면
    if (updatedData) {
      // 이전 상태의 userData 배열을 기반으로 업데이트
      setUserData((prev) => {
        // 이전 상태의 userData 배열을 복사한 후 각 항목을 순회하며 검사
        let result = [...prev].map((item) => {
          // 일치하면 사용자가 입력한 값을 반영한 새 객체로 교체
          // 일치하지 않으면 기존 값을 그대로 유지
          return item.nation === updatedData.nation
            ? { nation, goldMedal, silverMedal, bronzeMedal }
            : item;
        });
        // 업데이트된 배열을 반환하여 userData 상태를 업데이트
        return result;
      });
    }
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
            <button onClick={(e) => handleUpdateNation()}>수정</button>
          </div>
        </div>
        {/* 값*/}
        <div className="grid">
          {userData.map(function (item) {
            return (
              <table key={item.nation}>
                <tr>
                  <td>{item.nation}</td>
                  <td>{item.goldMedal}</td>
                  <td>{item.silverMedal}</td>
                  <td>
                    {item.bronzeMedal}
                    <button onClick={() => handleDeleteNation(item.nation)}>
                      삭제
                    </button>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default MedalTracker;
