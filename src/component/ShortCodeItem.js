import React from 'react';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

const ShortCodeItem = ({title, url, text}) => {
    return (
        <ListItem disablePadding>
            <ListItemText primary={title}/>
            <ListItemButton component="a" href={url} target="_blank" sx={{color: 'blue'}}>
                <ListItemText primary={text}/>
            </ListItemButton>
        </ListItem>
    );
}

export default ShortCodeItem;