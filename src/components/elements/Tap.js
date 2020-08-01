import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchInput from '../elements/SearchInput';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#fbfbff' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Keyword" {...a11yProps(0)} />
                    <Tab label="Area of Practice" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} style={{ backgroundColor: '#ECEDED' }}>
                <SearchInput ></SearchInput>
                <div className="container-xs">
                    <label >Popular: </label>
                    <Link to="/lawInfoResult" style={{ color: '#0645AD' }}>Intellectual Property, </Link>
                    <Link to="/lawInfoResult" style={{ color: '#0645AD' }}>Immigration, </Link>
                    <Link to="/lawInfoResult" style={{ color: '#0645AD' }}>Tenancy, </Link>
                    <Link to="/lawInfoResult" style={{ color: '#0645AD' }}>Divorce, </Link>
                    <Link to="/lawInfoResult" style={{ color: '#0645AD' }}>Crime </Link>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} style={{ backgroundColor: '#ECEDED' }}>
                <Button style={{backgroundColor: '#A9A9A9', color: 'white',marginLeft:'10px',marginRight:'10px',borderRadius: '8px',minWidth: '260px', minHeight: '60px',marginBottom:'5px'}}>Civil Claims</Button>
                <Button style={{backgroundColor: '#A9A9A9', color: 'white',marginLeft:'10px',marginRight:'10px',borderRadius: '8px',minWidth: '260px', minHeight: '60px',marginBottom:'5px'}}>Convetancing</Button>
                <Button style={{backgroundColor: '#A9A9A9', color: 'white',marginLeft:'10px',marginRight:'10px',borderRadius: '8px',minWidth: '260px', minHeight: '60px',marginBottom:'5px'}}>Family Law</Button>
                <Button style={{backgroundColor: '#A9A9A9', color: 'white',marginLeft:'10px',marginRight:'10px',borderRadius: '8px',minWidth: '260px', minHeight: '60px',marginBottom:'5px'}}>Arbitration / Mediation</Button>
                <Button style={{backgroundColor: '#A9A9A9', color: 'white',marginLeft:'10px',marginRight:'10px',borderRadius: '8px',minWidth: '260px', minHeight: '60px',marginBottom:'5px'}}>Corporate Finance</Button>
                <Button style={{backgroundColor: '#A9A9A9', color: 'white',marginLeft:'10px',marginRight:'10px',borderRadius: '8px',minWidth: '260px', minHeight: '60px',marginBottom:'5px'}}>Criminal Law</Button>
            </TabPanel>
        </div>
    );
}
