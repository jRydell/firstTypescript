import Addition from "./Addition";
import CarList from "./CarList";
import ChangeText from "./ChangeText";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import Counter1 from "./Counter1";
import Header from "./Header"
import List from "./List";
import PrettyText from "./PrettyText";
import QuestList from "./QuestList";
import Stringer from "./Stringer";
import TextToAlert from "./TextToAlert";

function App() {
  

  return (
    <>
   
      <Header>
        <h1>Rubrik</h1>
       </Header>
       <Stringer />
       <Counter1 />
       <PrettyText />
       <CarList />
       <Counter />
       <TextToAlert />
       <ChangeText />
       <Addition />
       <ColorBox />
       <List />
       <QuestList />
    </>
  );
};

export default App
