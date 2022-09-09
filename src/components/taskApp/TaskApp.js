import React from "react";
import useTaskState from "../../hooks/useTaskState";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import NewTaskForm from "../newTaskForm/NewTaskForm";
import TaskList from "../taskList/TaskList";

function TaskApp(){

    const initialTaskData = [{id: 0, task: 'Add tasks to this list', completed: false}];

    const {tasks, addTask, removeTask, toggleTaskCompleted, editTask} = useTaskState(initialTaskData);

    // const initialTaskData = [
    //     {id: 1, task: 'Finish React course.', completed: false},
    //     {id: 2, task: 'Go to the grocery store.', completed: true},
    //     {id: 3, task: 'Go to the comic store.', completed: false},
    // ];

    // const [ tasks, setTasks] = useState(initialTaskData);

    // useEffect(() => {
    //     window.localStorage.setItem('tasks', JSON.stringify(tasks));
    // }, [tasks]);

    // const addTask = (newTask) => {
    //     let newTaskEntry = {
    //         id: uuidV4(),
    //         task: newTask,
    //         completed: false
    //     };

    //     setTasks([...tasks, newTaskEntry]);
    // }

    // const removeTask = (taskId) => {
    //     console.log(`@TaskApp removing task with id... ${taskId}`);
    //     let updatedTasks = tasks.filter(task => task.id !== taskId);
    //     setTasks(updatedTasks);
    // };

    // const toggleTaskCompleted = (taskId) => {
    //     console.log(`@TaskApp toggling task completed with id... ${taskId}`);
    //     let updatedTasks = tasks.map(task => 
    //         task.id === taskId ? {...task, completed: !task.completed} : task
    //     );
    //     setTasks(updatedTasks);
    // };

    // const editTask = (taskId, taskUpdate) => {
    //     console.log(`@TaskApp edititing task with id... ${taskId}`);
    //     console.log(`@TaskApp edititing task with taskUpdate... ${taskUpdate}`);
    //     let updatedTasks = tasks.map(task => 
    //         task.id === taskId ? {...task, task: taskUpdate} : task
    //     );
    //     setTasks(updatedTasks);
    // };

    return (
        <Paper 
            style={{
                padding: '0',
                margin: '0',
                height: '100vh',
                width: '100vw',
                // border: '2px solid red',
                textAlign: 'center'
                // backgroundColor: '#313131',
                // color: '#daa520'
            }}
            elevation={0}
        >
            <AppBar 
                color="primary" 
                position="static" 
                style={{
                    height: '64px', 
                    backgroundColor: '#daa520', 
                    color: '#212020'
                }}
            >
               <Toolbar>
                    <Typography>
                        Hooks - ToDoList
                    </Typography>
               </Toolbar>
            </AppBar>

            <Grid container justify='center' style={{textAlign: 'center', marginTop: '1rem'}}>
                <Grid item justify='center' xs={11} md={8} lg={4}>
                    <NewTaskForm addTask={addTask} />
                    <TaskList 
                        tasks={tasks} 
                        removeTask={removeTask} 
                        toggleTaskCompleted={toggleTaskCompleted} 
                        editTask={editTask} 
                    />
                </Grid>
            </Grid>
   
        </Paper>
    );
}

export default TaskApp;