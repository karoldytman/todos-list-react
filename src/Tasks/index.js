import "./style.css";
const Tasks = ({ tasks, hideDoneTask, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item ${
          task.done && hideDoneTask === true ? "tasks__item--hiden" : ""
        }`}
      >
        <button
          className="tasks__button tasks__button--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`tasks__Content ${task.done ? "task__content--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
