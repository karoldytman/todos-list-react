import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Zjeść obiad", done: false },
    { id: 2, content: "Umyć naczycia", done: true },
]);
  const toggleHideDoneTask = () => {
    setHideDoneTask(hideDoneTask => !hideDoneTask);
  };
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    };
const toggleTaskDone = (id) => {
  setTasks(tasks => tasks.map(task => {
    if (task.id === id) {
      return { ...task, done: !task.done };
    }

    return task;
  }));
}
  return (
    <Container>
   <Header title="Lista zadań" />
    <Section title="Dodaj nowe zadanie" body={<Form />} />
   <Section 
   title="Lista zadań" 
   body={<Tasks 
    tasks={tasks} 
    hideDoneTask={hideDoneTask}
    removeTask={removeTask} 
    toggleTaskDone={toggleTaskDone} />}
   ExContent={<Buttons 
    tasks={tasks} hideDoneTask={hideDoneTask} toggleHideDoneTask={toggleHideDoneTask} />} 
   />

</Container>
  );
}

export default App;
