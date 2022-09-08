import React from "react";
import Task from "../task/Task";
import Paper from "@mui/material/Paper";
import List from '@mui/material/List';
import { Divider } from "@mui/material";
function TaskList({tasks, removeTask}){

    const taskList = tasks.map(task => (
        <Task key={task.id} id={task.id} task={task.task} completed={task.completed} removeTask={removeTask} />
    ));

    return (
        <div>
            <h2>TaskList</h2>
            <List className="TaskList-display">
                {taskList}
            </List>
        </div>
    );
}

export default TaskList;