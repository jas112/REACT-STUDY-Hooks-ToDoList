import React from "react";
import Task from "../task/Task";
import List from '@mui/material/List';
function TaskList({tasks, removeTask, toggleTaskCompleted, editTask}){

    const taskList = tasks.map((task, idx) => (
        <Task 
            key={task.id} 
            id={task.id} 
            idx={idx} 
            dataLength={tasks.length}
            task={task.task} 
            completed={task.completed} 
            removeTask={removeTask} 
            toggleTaskCompleted={toggleTaskCompleted} 
            editTask={editTask} 
        />
    ));

    if(tasks.length){
        return (
            <List className="TaskList-display">
                {taskList}
            </List>
        );
    }

    return null;
}

export default TaskList;