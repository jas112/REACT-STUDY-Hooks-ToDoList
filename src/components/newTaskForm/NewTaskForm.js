import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import useFormInputState from "../../hooks/useFormInputState";

function NewTaskForm({addTask}){
    const [task, updateTask, resetTask] = useFormInputState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       addTask(task);
       resetTask();
    }

    return (
        <Paper>
            <form onSubmit={handleSubmit}>
                <TextField value={task} onChange={updateTask} />
                <Button color="primary" type='submit'>ADD TASK</Button>
                <Button color="secondary" onClick={resetTask}>RESET TASK</Button>
            </form> 
        </Paper>
    );
}

export default NewTaskForm;