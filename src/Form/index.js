import { useState, useRef} from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const  contentTrimmed = newTaskContent.trim();

    if (contentTrimmed !== "") {
      addNewTask(contentTrimmed);
      setNewTaskContent("");
      inputRef.current.focus();
    };
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
      ref={inputRef}
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;