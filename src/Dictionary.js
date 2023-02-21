import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a word.."
          onChange={handleWord}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
