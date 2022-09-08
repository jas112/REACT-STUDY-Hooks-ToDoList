import React from "react";
import { ListItem, ListItemText } from "@mui/material";

function Task(props){
    return (
        <ListItem>
            <ListItemText>
                {props.task}
            </ListItemText>
            <ListItemText>
                {props.completed.toString()}
            </ListItemText>
        </ListItem>
    );
}

export default Task;