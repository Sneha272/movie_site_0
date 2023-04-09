import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import MoviesCard from "../components/MoviesCard";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/contextProvider";

function Home() {
  const [search, setsearch] = useContext(MyContext);
  const [movies, setmovies] = useState([
    {id:"",
      name: "",
      summary: "",
      image: "",
    },
  ]);
  console.log(search);

  useEffect(() => {
    setmovies([]);
    async function searchMovie() {
      const result = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response);

          response.map((show) => {
            console.log(show);
            setmovies([
              ...movies,
              {
                id:show.show.id,
                name: show.show.name,
                summary: show.show.summary,
                image: show.show.image.medium,
              },
            ]);
          });
        });
    }
    searchMovie();
  }, [search]);

  return (
    <div>
        <div className="row">
          <Navbar />
        </div>
        <div className="row container" style={{ margin: "70px 20px 10px 20px" }}>
          <div className="row">
            {movies.map((mov) => {
              return (
                <div className="col">
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