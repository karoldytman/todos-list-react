
import { StyledButtons, Button } from "./styled";
const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDoneTask}>
          {hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </StyledButtons>
);

export default Buttons;
