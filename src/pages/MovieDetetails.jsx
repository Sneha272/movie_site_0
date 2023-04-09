import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from "../components/Navbar";


 const MovieDetetails = () => {
  const params = useParams()
  const [users, setUsers] = useState([])
  const [Movie, setMovie] = useState({})

  const fetchData = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
    const data = await response.json();
    setMovie(data);
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

    
    console.log(params);
  return (
    
  <div>
     <div className="card" style="width: 18rem;">
           <img src={Movie.image.original} className="card-img-top" alt="..."/>
        <div className="card-body">
         <div>Movie Summary{Movie.name}</div>
         <div>Movie Summary{Movie.summary}</div>

        </div>
      </div>
  </div>
   
  )
}
export default MovieDetetails
