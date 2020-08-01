import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from './Logo';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TabWithProfile() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(0)} />
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(1)} />
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(2)} />
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(3)} />
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(4)} />
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(5)} />
                    <Tab label="Partner" icon={<Logo />} {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                [insert partner profile 1]
      </TabPanel>
            <TabPanel value={value} index={1}>
                [insert partner profile 2]
      </TabPanel>
            <TabPanel value={value} index={2}>
                [insert partner profile 3]
      </TabPanel>
            <TabPanel value={value} index={3}>
                [insert partner profile 4]
      </TabPanel>
            <TabPanel value={value} index={4}>
                [insert partner profile 5]
      </TabPanel>
            <TabPanel value={value} index={5}>
                [insert partner profile 6]
      </TabPanel>
            <TabPanel value={value} index={6}>
                [insert partner profile 7]
      </TabPanel>
        </div>
    );
}
