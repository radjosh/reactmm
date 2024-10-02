import React from "react";

import images from "../../images";

function SearchResults({ result }) {
  if (!result.Name) {
    return (
      <div className="no-results">
        <h1>There's totally no monster with that name, friend. (w t f)</h1>
      </div>
    );
  }

  const cleanerName = result?.Name.replace(/\s+/g, "") ?? "";
  return (
    <>
      <div className="wrapper">
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
          {result.Senses ? <h1>SENSES: {result.Senses}</h1> : null}
          {result.Vulnerable ? <h1>VULNERABLE: {result.Vulnerable}</h1> : null}
          {result.Immune ? <h1>IMMUNE: {result.Immune}</h1> : null}
          {result.Resist ? <h1>RESISTANT: {result.Resist}</h1> : null}
          {result.Spells ? <h1>SPELLS: {result.Spells}</h1> : null}
          {result.Traits?.map((trait) => (
            <div className="traits" key={trait.name + result.name}>
              <h1>TRAIT: {trait.name}</h1>
              <h2>{trait.text}</h2>
              {trait.attack ? (
                <h2 style={{ color: "red" }}>{trait.attack}</h2>
              ) : null}
            </div>
          ))}
          {result.Actions?.map((action) => (
            <div className="traits" key={action.name + result.name}>
              <h1>ACTION: {action.name}</h1>
              <h2>{action.text}</h2>
              {action.attack ? (
                <h2 style={{ color: "red" }}>{action.attack}</h2>
              ) : null}
            </div>
          ))}
          {result.Legendary?.map((legendary) => (
            <div className="traits" key={legendary.name + result.name}>
              <h1>LEGENDARY: {legendary.name}</h1>
              <h2>{legendary.text}</h2>
              {legendary.attack ? (
                <h2 style={{ color: "red" }}>{legendary.attack}</h2>
              ) : null}
            </div>
          ))}
          {result.Description ? (
            <div>
              <br />
              <p>
                <h1>{result.Description}</h1>
              </p>
            </div>
          ) : null}
        </div>
        <div key={result.Name} className="art animated">
          <img src={images[cleanerName]} />
        </div>
      </div>
    </>
  );
}

export default SearchResults;
