import React from 'react';
import { useState, useEffect,} from 'react';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setPeople(data)
      }).catch((error) => console.log(error.message));
  }, []);

  return (
    <main>
      <ul className="list-group">
        {people.map(person => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
    </main>
  )
}

export default People;