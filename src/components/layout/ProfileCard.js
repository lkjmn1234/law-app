import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from '@material-ui/core';
import TabWithProfile from '../layout/TabWithProfile'
import IconGroup from '../layout/IconGroup'


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        minWidth: 200,
        minHeight: 200,
        maxWidth: 200,
        maxHeight: 200
    },
}));

export default function ProfileCard() {
    const classes = useStyles();

    return (
        <div>
            <h4>Update 3 days ago | 100 views</h4>
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Firm Profile
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <Box style={{ backgroundColor: "#cdcdcd", width: "80%", height: "200px" }}>Firm Intro</Box >
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <h9 style={{ paddingRight: "60px" }}>Address:</h9><h9 >xxx</h9><br />
                        <h9 style={{ paddingRight: "85px" }}>Email:</h9><h9 >yyy@yyy.com</h9><br />
                        <h9 style={{ paddingRight: "5px" }}>Working hours:</h9><h9 >09:00 - 18:00, Mon - Fri</h9><br />
                        <h9 style={{ paddingRight: "140px" }}></h9><h9>10:00 - 13:00, Sat</h9><br />
                        <h9 style={{ paddingRight: "65px" }}>Contact:</h9><h9 >xxx</h9>
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.cover}
                    image="/interactive.JPG"
                >
                </CardMedia>
            </Card>
            <Card >
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Members
                    </Typography>
                    <Typography variant="subtitle1">
                        <TabWithProfile></TabWithProfile>
                    </Typography>
                </CardContent>
            </Card>
            <Card >
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Area of Practice
                    </Typography>
                    <Typography component="h5" variant="h5">
                        <IconGroup value={
                            [
                                { name: 'Conveyancing' }, { name: 'Civil Claims' },
                                { name: 'Personal Injuries' }, { name: 'M & A' }
                            ]
                        }></IconGroup>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
