import "./style.css";
const Tasks = (props) => ( <
    ul className = "tasks" > {
        props.tasks.map(task => ( <
            li key = { task.id }
            className = { `tasks__item ${task.done && props.hideDoneTasks === true ? "tasks__item--hiden" : ""}` } >
            <
            button className = "tasks__button tasks__button--done" > { task.done ? "✔" : "" } < /button> <
            span className = { `tasks__Content ${task.done ? "task__content--done" : ""}` } > { task.content } < /span> <
            button className = "tasks__button tasks__button--remove" > 🗑 < /button>

            { task.content }

            <
            /li>
        ))
    } < /ul>
);

export default Tasks;