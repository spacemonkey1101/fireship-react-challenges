import "./App.css";

function Icon() {
  return <span>🔥</span>;
}

function Card(props) {
  return (
    <div>
      <h2> {props.icon} Title</h2>
      {props.children}
    </div>
  );
}
function App() {
  return (
    <>
      <Card icon={<Icon />}>
        <p>The body of the card</p>
      </Card>
    </>
  );
}

export default App;
