import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./request";
import FlipMove from "react-flip-move";
function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //run this code when results component loads/mounts
    async function fetchData() {
      const request = await axios.get(selectedOption);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          /*glitch olmaması için burada id veriyoruz*/
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
