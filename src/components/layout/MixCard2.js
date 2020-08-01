import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 200,
        display: 'flex',
    },
    square: {
        color: '#C0C0C0',
        backgroundColor: '#C0C0C0',
        width: '200px',
        height: '200px',
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();
    const { name, lang, content } = props;
    return (
        <div className="container card-wrapper2">
            <Card className={classes.root} style={{ backgroundColor: '#C0C0C0', marginBottom: '20px', }}>
                <CardContent>
                    <Typography variant="h5" component="h5">
                        <Link to="/lawInfoDetail">{name}</Link>
                    </Typography>
                    <Typography variant="h8" component="h8">
                        <div style={{paddingBottom:'40px'}}>{lang} </div>
                    </Typography>
                    <Typography variant="h8" component="h8" >
                        <div style={{paddingTop:'40px'}}>{content} </div>
                    </Typography>
                </CardContent>
            </Card>
            <Avatar alt="Remy Sharp" src='/intelligent.JPG' className={classes.square} />
        </div>
    );
}