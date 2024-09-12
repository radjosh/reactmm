import React from "react";

function SearchResults({ result }) {
  if (!result.Name) {
    return (
      <div className="no-results">
        <h2>There's totally no monster with that name, friend. (w t f)</h2>
      </div>
    );
  }
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
      {result.Skill ? <h1>SKILL: {result.Skill}</h1> : null}
      <h1>PASSIVE PERCEPTION: {result.Passive}</h1>
      <h1>LANGUAGES: {result.Languages}</h1>
      <h1>CR: {result.Cr}</h1>
      {result.Spells ? <h1>SPELLS: {result.Spells}</h1> : null}
      {result.Description ? <h1>DESCRIPTION: {result.Description}</h1> : null}
    </div>
  );
}

export default SearchResults;
