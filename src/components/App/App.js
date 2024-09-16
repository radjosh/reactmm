import React from "react";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const ENDPOINT = "http://localhost:8088/monster";

  const [monster, setMonster] = React.useState("");
  const [result, setResult] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const url = new URL(ENDPOINT);
    url.searchParams.append("name", monster.toLowerCase());
    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();
    setResult(() => json);
    setMonster(() => "");
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          value={monster}
          onChange={(event) => {
            setMonster(() => event.target.value);
          }}
        />
      </form>
      {<SearchResults result={result} />}
    </div>
  );
}

export default App;
