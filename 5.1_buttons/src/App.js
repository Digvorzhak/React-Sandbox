import Button from "./Button";

function App() {
  const important = {
    text: "Important",
  };
  const notImportant = {
    text: "Not important",
  };

  return (
    <div className="App">
      <Button className="bold" text={important.text}></Button>
      <Button className="normal" text={notImportant.text}></Button>
    </div>
  );
}
export default App;
