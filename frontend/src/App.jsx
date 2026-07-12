import { useState } from "react";
import "./App.css";

function App() {

  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");

  const getMessage = async () => {

const response = await fetch(
  `/api/message?keyword=${keyword}`
);

    const data = await response.json();

    setMessage(data.message);

  };

  return (
    <div className="container">

      <h1>Magic Message App</h1>

      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <br /><br />

      <button onClick={getMessage}>
        Submit
      </button>

      <h2>{message}</h2>

    </div>
  );
}

export default App;