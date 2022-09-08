import React from "react";
import { ListItem, ListItemText, Divider, Button } from "@mui/material";

function Task({id, task, completed, removeTask}){

    const handleClick = () => {
        console.log(`@task removing task with id... ${id}`);
        removeTask(id);
    }

    return (
        <>
            <ListItem>
                <ListItemText>
                    {task}
                </ListItemText>
                <ListItemText>
                    {completed.toString()}
                </ListItemText>
                <Button onClick={handleClick}>X</Button>
            </ListItem>
            <Divider/>
        </>

    );
}

export default Task;