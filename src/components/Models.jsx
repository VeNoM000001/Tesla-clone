import React from "react";
import "../Styles/Models.css";

function Main(props) {
  function render() {
    if (props.model_name == "Accessories") {
      return <button className="orders">{props.model_button_1_text}</button>;
    } else {
      return (
        <>
          <button className="orders">{props.model_button_1_text}</button>
          <button className="inventory">{props.model_button_2_text}</button>
        </>
      );
    }
  }
  return (
    <div
      className="model_3"
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    >
      <div className="text_area">
        <h1>{props.model_name}</h1>
        <div>{props.model_details}</div>
      </div>
      <div className="button_area">{render()}</div>
    </div>
  );
}

export default Main;
