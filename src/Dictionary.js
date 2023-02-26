import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function handleImagesResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "bb5oaf353e45cba2e47481cc44200t7b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const imagesApiKey = "bb5oaf353e45cba2e47481cc44200t7b";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }
  function handleWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary</h1>
        <h2>What word would you want to look up?</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="enterAword"
            type="search"
            placeholder="Enter a word in English.. 🤗     "
            onChange={handleWord}
          />
          <input className="searchAword" type="submit" value="Search" />
        </form>
        <p>i.e. paris, wine, yoga, coding</p>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
