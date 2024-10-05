import React from "react";

import images from "../../images";

function SearchResults({ result }) {
  if (!result.Name) {
    return (
      <div className="no-results">
        <h2>There's totally no monster with that name, friend. (w t f)</h2>
      </div>
    );
  }

  const cleanerName = result?.Name.replace(/\s+/g, "") ?? "";
  return (
    <>
      <div className="wrapper">
        <div className="results">
          <h1>{result.Name.toUpperCase()}</h1>
          <h2>SIZE: {result.Size}</h2>
          <h2>TYPE: {result.Type}</h2>
          <h2>ALIGNMENT: {result.Alignment}</h2>
          <h2>AC: {result.Ac}</h2>
          <h2>HP: {result.Hp}</h2>
          <h2>SPEED: {result.Speed}</h2>
          <h2>STR: {result.Str}</h2>
          <h2>DEX: {result.Dex}</h2>
          <h2>CON: {result.Con}</h2>
          <h2>INT: {result.Int}</h2>
          <h2>WIS: {result.Wis}</h2>
          <h2>CHA: {result.Cha}</h2>
          {result.Save ? <h2>SAVE: {result.Save}</h2> : null}
          {result.Skill ? <h2>SKILL: {result.Skill}</h2> : null}
          <h2>PASSIVE PERCEPTION: {result.Passive}</h2>
          <h2>LANGUAGES: {result.Languages}</h2>
          <h2>CR: {result.Cr}</h2>
          {result.Senses ? <h2>SENSES: {result.Senses}</h2> : null}
          {result.Vulnerable ? <h2>VULNERABLE: {result.Vulnerable}</h2> : null}
          {result.Immune ? <h2>IMMUNE: {result.Immune}</h2> : null}
          {result.ConditionImmune ? (
            <h2>CONDITION IMMUNITIES: {result.ConditionImmune}</h2>
          ) : null}
          {result.Resist ? <h2>RESISTANT: {result.Resist}</h2> : null}
          {result.Traits?.map((trait) => (
            <div key={trait.name + result.name}>
              <h2>TRAIT: {trait.name}</h2>
              <h2 className="traits">{trait.text}</h2>
              {trait.attack ? (
                <h2 className="traits" style={{ color: "red" }}>
                  {trait.attack}
                </h2>
              ) : null}
            </div>
          ))}
          {result.Actions?.map((action) => (
            <div key={action.name + result.name}>
              <h2>ACTION: {action.name}</h2>
              <h2 className="traits"> {action.text}</h2>
              {action.attack ? (
                <h2 className="traits" style={{ color: "red" }}>
                  {action.attack}
                </h2>
              ) : null}
            </div>
          ))}
          {result.Reactions?.map((reaction) => (
            <div key={reaction.name + result.name}>
              <h2>REACTION: {reaction.name}</h2>
              <h2 className="traits"> {reaction.text}</h2>
              {reaction.attack ? (
                <h2 className="traits" style={{ color: "red" }}>
                  {reaction.attack}
                </h2>
              ) : null}
            </div>
          ))}
          {result.Legendary?.map((legendary) => (
            <div key={legendary.name + result.name}>
              <h2>LEGENDARY: {legendary.name}</h2>
              <h2 className="traits">{legendary.text}</h2>
              {legendary.attack ? (
                <h2 className="traits" style={{ color: "red" }}>
                  {legendary.attack}
                </h2>
              ) : null}
            </div>
          ))}
          {result.Spells ? <h2>SPELLS: {result.Spells}</h2> : null}
          {result.Slots ? <h2>SLOTS: {result.Slots}</h2> : null}
          {result.Description ? (
            <div>
              <br />
              <p>
                <h2>{result.Description}</h2>
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
