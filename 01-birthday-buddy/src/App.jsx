import { useState } from 'react';
import data from './data';

import Person from './Person';
import PersonList from './PersonList';

const App = () => {
  const [persons, setPersons] = useState(data);
  return (
    <main>
      <section className="container">
        <h3> {persons.length} Birthdays Today </h3>
        <PersonList persons={persons} />

        <button className="btn btn-block" onClick={() => setPersons([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
