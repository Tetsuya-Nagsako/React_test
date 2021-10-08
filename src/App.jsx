import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [face, setFace] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickFaceChange = () => {
    setFace(!face);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        face || setFace(true);
      } else {
        face && setFace(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickFaceChange}>on/off</button>
      <p>{num}</p>
      {face && <p>^^</p>}
    </>
  );
};

export default App;
