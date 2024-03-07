import Addition from "./Addition";
import CarList from "./CarList";
import ChangeText from "./ChangeText";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import Header from "./Header"
import List from "./List";
import QuestList from "./QuestList";
import TextToAlert from "./TextToAlert";

function App() {
  

  return (
    <>
   
      <Header>
        <h1>Rubrik</h1>
       </Header>
       {/* <CarList /> */}
       <Counter />
       <TextToAlert />
       <ChangeText />
       <Addition />
       <ColorBox />
       <List />
       {/* <QuestList /> */}
    </>
  );
};

export default App
