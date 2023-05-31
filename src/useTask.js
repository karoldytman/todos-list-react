import { useEffect, useState } from "react";


export const useTask = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
      );
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);
      const removeTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
      };
    
      const toggleTaskDone = (id) => {
        setTasks((tasks) =>
          tasks.map((task) => {
            if (task.id === id) {
              return { ...task, done: !task.done };
            }
    
            return task;
          })
        );
      };
      const setAllDone = () => {
        setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
      };
    
      const addNewTask = (newTaskContent) => {
        setTasks((task) => [
          ...task,
          {
            content: newTaskContent,
            done: false,
            id: tasks.length === 0 ? 1 : task[task.length - 1].id + 1,
          },
        ]);
      };

      return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
      };
};