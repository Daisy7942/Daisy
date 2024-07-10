import React, { useState, useEffect } from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
    //무조건 로직
  };
  useEffect(() => {
    console.log("렌더링");
  });
  // 전부다 라서 구분해 놓는게 좋다

  useEffect(() => {
    console.log("count 렌더링");
  }, [count]);
  // count 로직

  useEffect(() => {
    console.log("name 렌더링");
  }, [name]);
  //네임 로직
  useEffect(() => {
    console.log("init 렌더링");
  }, []);
  //처음에
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count:{count}</span>

      <input type="text" value={name} onChange={handleInputChange}></input>
      <span>name:{name}</span>
    </div>
  );
}

export default UseEffectApp1;
