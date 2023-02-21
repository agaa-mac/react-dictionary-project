import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          This project was coded by Agata Mączyńska and is open-sourced on
          <a
            href="https://github.com/agaa-mac/react-dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          and hosted on
          <a
            href="https://dictionary-project-21022023.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
