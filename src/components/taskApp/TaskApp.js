import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { v4 as uuidV4 } from "uuid";
import NewTaskForm from "../newTaskForm/NewTaskForm";
import TaskList from "../taskList/TaskList";

function TaskApp(){
    const initialTaskData = [
        {id: 1, task: 'Finish React course.', completed: false},
        {id: 2, task: 'Go to the grocery store.', completed: true},
        {id: 3, task: 'Go to the comic store.', completed: false},
    ];

    const [ tasks, setTasks] = useState(initialTaskData);

    const addTask = (newTask) => {
        let newTaskEntry = {
            id: uuidV4(),
            task: newTask,
            completed: false
        };

        setTasks([...tasks, newTaskEntry]);
    }

    const removeTask = (taskId) => {
        console.log(`@TaskApp removing task with id... ${taskId}`);
        let rootTasks = [...tasks];
        let newTasks = rootTasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    };

    return (
        <Paper 
            style={{
                padding: '0',
                margin: '0',
                height: '100vh',
                border: '2px solid red',
                textAlign: 'center'
                // backgroundColor: '#313131',
                // color: '#daa520'
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

            <Grid container justify='center'>
                <Grid item xs={11} md={8} lg={4}>
                    <NewTaskForm addTask={addTask} />
                    <TaskList tasks={tasks} removeTask={removeTask} />
                </Grid>
            </Grid>
   
        </Paper>
    );
}

export default TaskApp;