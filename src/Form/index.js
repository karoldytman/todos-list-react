import { useState, useRef } from "react";
import { StyleForm, Input, Buttons } from "./styled";

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
    <StyleForm onSubmit={onFormSubmit}>
      <Input
      ref={inputRef}
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Buttons className="form__button">Dodaj zadanie</Buttons>
    </StyleForm>
  );
};

export default Form;
