import "./Text.css";
import { useState } from "react";

function ButtonText(): JSX.Element {
  const [text, setText] = useState<boolean>(false);

  const manipulateText = (): void => {
    setText(!text);
  };

  const myText = 'some text'

  return (
    <div className="text">
      <h1>{text}</h1>
      <button onClick={manipulateText}>click here</button>
      {text? <div> {myText} </div>: null}
    </div>
  );
}

export default ButtonText