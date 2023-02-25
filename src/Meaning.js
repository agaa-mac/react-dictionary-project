import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      <p className="example"> {props.meaning.example}</p>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
