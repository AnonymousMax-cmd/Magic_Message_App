import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");

  const checkKeyword = () => {
    if (keyword.toLowerCase() === "docker") {
      setMessage("🐳 Docker is Awesome!");
    } else if (keyword.toLowerCase() === "azure") {
      setMessage("☁️ Welcome Azure Engineer!");
    } else if (keyword.toLowerCase() === "github") {
      setMessage("🚀 GitHub Actions is Working!");
} else if (keyword.toLowerCase() === "jyoti") {
      setMessage("ab to ghar ja rhi ho ap!");

    } else {
      setMessage("❌ Invalid Keyword");
    }
  };

  return (
    <div>
      <h1>Magic Message</h1>

      <input
        type="text"
        placeholder="Enter a keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <br /><br />

      <button onClick={checkKeyword}>
        Submit
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;