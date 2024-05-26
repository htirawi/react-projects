import Person from './Person';

const PersonList = ({ persons }) => {
  return (
    <section>
      {persons.map((person) => {
        const { id, name, age, image } = person;
        return <Person key={id} name={name} age={age} image={image} />;
      })}
    </section>
  );
};

export default PersonList;
