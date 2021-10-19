import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "./App.css";
import Results from "./Results";
import requests from "./request";


function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* nav  navın içine setState fonksiyonunu gönderebiliyoruz*/}
      <Nav setSelectedOption={setSelectedOption} />
      {/* Results */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;


