import { useState } from "react";
import Navbar from "./components/Navbar";
import Model_3 from "./components/Models";
import "./Styles/App.css";
import data from "./Data";

function App() {
  const [count, setCount] = useState(0);
  const body = data.map((item) => {
    return (
      <Model_3
        key={item.name}
        bgImage={item.image}
        model_name={item.name}
        model_details={item.details}
        model_button_1_text={item.button_1_text}
        model_button_2_text={item.button_2_text}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div>{body}</div>
    </div>
  );
}

export default App;
