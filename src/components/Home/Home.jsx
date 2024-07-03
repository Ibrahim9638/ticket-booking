import React, { useEffect, useState } from "react";
import SinlgeMovie from "../SinlgeMovie/SinlgeMovie";

const Home = ({ handleWatchTime }) => {
  const [movieContent, setMovieContent] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setMovieContent(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      {movieContent.map((movie, idx) => (
        <SinlgeMovie
          key={idx}
          movie={movie}
          handleWatchTime={handleWatchTime}
        ></SinlgeMovie>
      ))}
    </div>
  );
};

export default Home;
