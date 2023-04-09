import React from "react";
import { Link } from "react-router-dom";
// import poster from "../assets/poster.jpg"
const MoviesCard = ({id, name, summary, img }) => {
  // console.log(props);
  //  const show  = props.show
  return (
    <div>
      <div className="card" style={{ width: "200px" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{summary.slice(3,100)}</p>
          <Link to={`/about/${id}`}>
            {" "}
            <p href="#" className="btn btn-primary">
              Details
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
