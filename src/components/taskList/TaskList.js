import React from "react";
import Task from "../task/Task";
import List from '@mui/material/List';
function TaskList({tasks, removeTask}){

    const taskList = tasks.map((task, idx) => (
        <Task key={task.id} id={task.id} idx={idx} task={task.task} completed={task.completed} removeTask={removeTask} />
    ));

    return (
        <List className="TaskList-display">
            {taskList}
        </List>
    );
}

export default TaskList;