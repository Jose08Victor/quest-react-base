import Paragraph from "./components/styledText/index.jsx";
import Button from "./components/alertButton/index.jsx";

function App() {
  return (
    <>
      <Paragraph paragraphColor="Green" stateOfLetters="uppercase" />

      <Button label="Click Here" />
    </>
  );
}

export default App;