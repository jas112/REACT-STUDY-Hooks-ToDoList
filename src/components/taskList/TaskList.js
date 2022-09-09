import React from "react";
import Task from "../task/Task";
import List from '@mui/material/List';
function TaskList({tasks, removeTask, toggleTaskCompleted, editTask}){

    const taskList = tasks.map((task, idx) => (
        <Task 
            key={task.id} 
            id={task.id} 
            idx={idx} 
            task={task.task} 
            completed={task.completed} 
            removeTask={removeTask} 
            toggleTaskCompleted={toggleTaskCompleted} 
            editTask={editTask} 
        />
    ));

    return (
        <List className="TaskList-display">
            {taskList}
        </List>
    );
}

export default TaskList;