import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));

export default function CheckboxLabels(props) {
    const classes = useStyles();
    const { name, path } = props;
    return (
        <div style={{textAlign:'center',margin:'0 auto'}}>
            <Avatar alt="Remy Sharp" src={path} className={classes.large} />
            <h6>{name}</h6>
        </div>
    );
}
