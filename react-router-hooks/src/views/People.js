import React from 'react';
import { useState, useEffect,} from 'react';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setPeople(data)
      }).catch((error) => console.log(error.message));
  }, []);

  return (
    <main>
      <h1>HelloPeople</h1>
    </main>
  )
}

export default People;