import "./style.css";
const Tasks = ({ tasks, hideDoneTasks, remuveTask }) => ( 
<ul className = "tasks"> {
        tasks.map(task => ( 
        <li key = {task.id}
            className = {`tasks__item ${task.done && hideDoneTasks === true ? "tasks__item--hiden" : ""}`} >
            <button className ="tasks__button tasks__button--done" > {task.done ? "✔" : ""} </button>
            <span className = {`tasks__Content ${task.done ? "task__content--done" : ""}`} > {task.content}</span>
            <button 
            onClick={() => remuveTask(task.id)}
            className ="tasks__button tasks__button--remove" >🗑</button>

        

            </li>
        ))}</ul>
);

export default Tasks;