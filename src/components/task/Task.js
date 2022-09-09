import React from "react";
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Button, Checkbox } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import useToggle from "../../hooks/useToggle";

function Task({id, idx, task, completed, removeTask}){

    const [taskCompleted, updateTaskCompleted] = useToggle(completed);

    const handleClick = () => {
        console.log(`@task removing task with id... ${id}`);
        removeTask(id);
    }

    const handleChange = () => {
        console.log(`@task removing task with id... ${id}`);
        updateTaskCompleted(taskCompleted);
    }

    return (
        <>
            <ListItem>
                <Checkbox tabIndex={-1} checked={taskCompleted} />
                <ListItemText style={{textDecoration: completed ? 'line-through' : ''}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton onClick={handleClick}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={handleClick}>
                        <Edit />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>

    );
}

export default Task;