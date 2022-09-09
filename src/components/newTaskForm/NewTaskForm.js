import React from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useFormInputState from "../../hooks/useFormInputState";
// import { withStyles } from "@mui/material";

// const styles = {
//     newTaskForm: {
//         margin: '1rem 0',
//         padding: '0 1rem',
//         border: '2px solid red',
//         backgroundColor: 'red'
//     }
// }

function NewTaskForm({addTask, props}){
    const [task, updateTask, resetTask] = useFormInputState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       addTask(task);
       resetTask();
    }

    return (
        <Paper styles={{margin: '1rem 0',padding: '0 1rem',width: '600px',border: '1px solid green'}}>
            <form onSubmit={handleSubmit}>
                <TextField value={task} onChange={updateTask} margin='normal'label='Add New Task' fullWidth />
                <Button variant="outlined" color="primary" type='submit' fullWidth>ADD TASK</Button>
                {/* <Button color="secondary" onClick={resetTask}>RESET TASK</Button> */}
            </form> 
        </Paper>
    );
}

export default NewTaskForm;