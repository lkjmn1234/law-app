import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function InteractiveList(props) {
    const { value } = props;
    const group = value.map(m => <ListItem><ListItemIcon><ArrowRightIcon/></ListItemIcon><ListItemText primary={m.name}/></ListItem>);
    return (
        <List className="card-wrapper">
            {group}
        </List>
    );
}
