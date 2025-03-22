import "./styles.css";
import { useState } from "react";
import CustomButton from "./components/customButton/customButton";

export default function App() {
  let [needFraction, setNeedFraction] = useState(false);
  let [input, setInput] = useState(0);

  function handleNumberClick(number) {
    if (needFraction && Number.isInteger(input)) {
      setInput(input + number / 10);
      setNeedFraction(false);
    } else {
      if (!Number.isInteger(input)) {
        const decimalLength = input.toString().split(".")[1].length;
        setInput(input + number / Math.pow(10, decimalLength + 1));
      } else {
        setInput(input === 0 ? number : input * 10 + number);
      }
    }
  }

  function handleFractionClick() {
    setNeedFraction(true);
  }

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>{input}</h2>
      <div>
        <CustomButton text={""} onButtonClick={() => console.log("asd")} />
        <CustomButton text={""} onButtonClick={() => console.log("asd")} />
        <CustomButton text={"C"} onButtonClick={() => console.log("asd")} />
        <CustomButton text={"/"} onButtonClick={() => console.log("asd")} />
      </div>
      <div>
        <CustomButton text={"7"} onButtonClick={() => handleNumberClick(7)} />
        <CustomButton text={"8"} onButtonClick={() => handleNumberClick(8)} />
        <CustomButton text={"9"} onButtonClick={() => handleNumberClick(9)} />
        <CustomButton text={"*"} onButtonClick={() => console.log("asd")} />
      </div>
      <div>
        <CustomButton text={"4"} onButtonClick={() => handleNumberClick(4)} />
        <CustomButton text={"5"} onButtonClick={() => handleNumberClick(5)} />
        <CustomButton text={"6"} onButtonClick={() => handleNumberClick(6)} />
        <CustomButton text={"+"} onButtonClick={() => console.log("asd")} />
      </div>
      <div>
        <CustomButton text={"1"} onButtonClick={() => handleNumberClick(1)} />
        <CustomButton text={"2"} onButtonClick={() => handleNumberClick(2)} />
        <CustomButton text={"3"} onButtonClick={() => handleNumberClick(3)} />
        <CustomButton text={"-"} onButtonClick={() => console.log("asd")} />
      </div>
      <div>
        <CustomButton text={"."} onButtonClick={handleFractionClick} />
        <CustomButton text={"0"} onButtonClick={() => handleNumberClick(0)} />
        <CustomButton text={"+/-"} onButtonClick={() => console.log("asd")} />
        <CustomButton text={"="} onButtonClick={() => console.log("asd")} />
      </div>
    </div>
  );
}
