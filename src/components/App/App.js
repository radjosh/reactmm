import React from "react";

import SearchResults from "../SearchResults/SearchResults";

function App() {
  const ENDPOINT =
    // 'http://localhost:3000/monster'
    "http://localhost:8088/monster";

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
    console.log(json);
    setResult(() => json);
    setMonster(() => "");
    // console.log(result);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          value={monster}
          onChange={(event) => {
            setMonster(() => event.target.value);
            // console.log(monster);
          }}
        />
        {/* <input type="submit" value="submit" /> */}
      </form>
      {/* <h1>what the fuck</h1> */}
      {<SearchResults result={result} />}
      {/* {result?.map(result => <SearchResult key={result.name} result={result} />)} */}
    </div>
  );
}

export default App;
