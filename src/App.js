import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
const tasks = [
    {id: 1, content: "Zjeść obiad", done: false},
    {id: 2, content: "Umyć naczycia", done: true},
];
function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);
  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTask => !hideDoneTask);
  }
  return (
    <Container>
   <Header title="Lista zadań" />
    <Section title="Dodaj nowe zadanie" body={<Form />} />
   <Section title="Lista zadań" body={ <Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
   ExContent={<Buttons 
    tasks={tasks} hideDoneTask={hideDoneTask} toggleHideDoneTask={toggleHideDoneTask}/>} 
   />

</Container>
  );
}

export default App;
