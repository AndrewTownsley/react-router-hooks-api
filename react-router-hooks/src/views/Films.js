import React from 'react';
import { useState, useEffect } from 'react';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((result) => result.json())
    .then((data) => {
      console.log(data)
      setFilms(data)
    }).catch((error) => console.log(error.message));
  }, [])

  return (
    <main>
     <h1>Hello Films</h1>
       <ul className="list-group">
        {films.map(film => {
          return <li key={film.id}>{film.title}</li>
        })}
       </ul>
    </main>
  )
}

export default Films;