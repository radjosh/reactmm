import React from "react";

function SearchResults({ result }) {
  //   return <h1>OH FUCK</h1>;
  return (
    <div className="results">
      <h1>{result.Name.toUpperCase()}</h1>
      <h1>SIZE: {result.Size}</h1>
      <h1>ALIGNMENT: {result.Alignment}</h1>
      <h1>AC: {result.Ac}</h1>
      <h1>HP: {result.Hp}</h1>
      <h1>STR: {result.Str}</h1>
      <h1>DEX: {result.Dex}</h1>
      <h1>CON: {result.Con}</h1>
      <h1>INT: {result.Int}</h1>
      <h1>WIS: {result.Wis}</h1>
      <h1>CHA: {result.Cha}</h1>
    </div>
  );
}

export default SearchResults;
