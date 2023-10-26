import Paragraph from "./components/paragraph.js";
import Button from "./components/button.js";

function App() {
  return (
    <>
      <Paragraph paragraphColor="Green" stateOfLetters="uppercase" />

      <Button label="Click Here" />
    </>
  );
}

export default App;