import "./style.css"
const Buttons = ( {tasks, hideDoneTasks, toggleHideDoneTask} ) => {
if(tasks.length === 0) {
    return null
}
return(
    <div className="buttons">
           <button onClick={toggleHideDoneTask} className="buttons__button hideShowButton">
    {hideDoneTasks === false ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button className="buttons__button"
    disabled={tasks.every(({ done }) => done)}
    >
    Ukończ wszystkie
    </button>
    </div>
 
    );
}

export default Buttons;