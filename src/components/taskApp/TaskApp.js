import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import NewTaskForm from "../newTaskForm/NewTaskForm";
import TaskList from "../taskList/TaskList";

function TaskApp(){
    const initialTaskData = [
        {id: 1, task: 'Finish React course.', completed: false},
        {id: 2, task: 'Go to the grocery store.', completed: true},
        {id: 3, task: 'Go to the comic store.', completed: false},
    ];

    const [ tasks, setTasks] = useState(initialTaskData);

    return (
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#212020',
                color: '#daa520'
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: '64px', backgroundColor: '#daa520', color: '#212020'}}>
               <Toolbar>
                    <Typography>
                        Hooks - ToDoList
                    </Typography>
               </Toolbar>
            </AppBar>
            <div className="TaskApp">
                <h1>TaskApp</h1>
                <div className="TaskApp-console">
                    <NewTaskForm />
                </div>
                <div className="TaskApp-console">
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </Paper>
    );
}

export default TaskApp;