import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 400,
    },
    rootS: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    square: {
        color: '#C0C0C0',
        backgroundColor: '#C0C0C0',
        width: 400,
        height: 400,
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();
    const { path, header, content } = props;
    return (
        <div className="container card-wrapper2">
            <Card className={classes.root} style={{ backgroundColor: '#C0C0C0', marginBottom: '20px', }}>
                <CardContent>
                    <Typography variant="body" component="p">
                        Some Text
                    </Typography>
                </CardContent>
            </Card>
            <Avatar alt="Remy Sharp" src='/intelligent.jpg' className={classes.square} />
        </div>
    );
}