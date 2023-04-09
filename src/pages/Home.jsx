import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import MoviesCard from "../components/MoviesCard";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/contextProvider";

function Home() {
  const [search, setsearch] = useContext(MyContext);
  const [movies, setmovies] = useState([
    { id: "", name: "", summary: "", image: "" },
  ]);

  useEffect(() => {
    setmovies([]);

    async function searchMovie(searchState) {
      if (searchState) {
        await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            console.log(response);

            setmovies(() => {
              return response.map((show) => {
                return {
                  id: show.show.id,
                  name: show.show.name,
                  summary: show.show.summary,
                  image: show.show.image.medium,
                };
              });
            });
          });
      }
    }
    searchMovie(search);
  }, [search]);

  return (
    <div>
      <div className="row">
        <Navbar />
      </div>
      <div className="row container" style={{ margin: "70px 20px 10px 20px" }}>
        <div className="row">
          {movies.map((mov, index) => {
            return (
              <div key={index} className="col">
                <MoviesCard
                  id={mov.id}
                  name={mov.name}
                  img={mov.image}
                  summary={mov.summary}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
