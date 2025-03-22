import React from "react";

export default function CustomButton({ text, onButtonClick }) {
  return <button onClick={onButtonClick}>{text}</button>;
}
