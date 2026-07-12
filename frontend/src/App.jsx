import { useState } from "react";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");

  const checkKeyword = () => {
    const value = keyword.toLowerCase();

    if (value === "docker")
      setMessage("🐳 Docker is Awesome!");
    else if (value === "azure")
      setMessage("☁️ Welcome Azure Engineer!");
    else if (value === "github")
      setMessage("🚀 GitHub Actions Rocks!");
    else
      setMessage("❌ Invalid Keyword");
  };

  return (
    <div className="container">
      <h1>DevOps Magic Message</h1>

      <input
        type="text"
        placeholder="Enter Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={checkKeyword}>Submit</button>

      <div className="message">{message}</div>
    </div>
  );
}

export default App;