import Addition from "./Addition";
import ChangeText from "./ChangeText";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import Header from "./Header"
import TextToAlert from "./TextToAlert";

function App() {
  

  return (
    <>
   
      <Header>
        <h1>Rubrik</h1>
       </Header>
       <Counter />
       <TextToAlert />
       <ChangeText />
       <Addition />
       <ColorBox />
    </>
  );
};

export default App
