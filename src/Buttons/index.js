
import { Common, Button } from "./styled";
const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask, setAllDone }) => (
  <Common>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDoneTask}>
          {hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={setAllDone}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Common>
);

export default Buttons;
