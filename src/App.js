import "./App.css";

const data = [
  { id: 1, name: "Bilbo" },
  { id: 2, name: "Frodo" },
  { id: 3, name: "samwise" },
  { id: 4, name: "Pippin" },
];
function App() {
  return (
    <ul>
      {data &&
        data.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
    </ul>
  );
}

export default App;
