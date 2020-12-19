import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        // width: 500,
    },
}));
const handleClick = (e) => {
    console.log(e.currentTarget.id)
    const getId = e.currentTarget.id
    if (getId === 'list1') {
        document.getElementById('item1').style.display = 'block';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list2') {
        document.getElementById('item2').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list3') {
        document.getElementById('item3').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list4') {
        document.getElementById('item4').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list5') {
        document.getElementById('item5').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
    }

}

export default function Faq() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className='container'>
            <h1 style={{ backgroundColor: 'black', width: '200px', color: 'white', padding: '10px 40px', borderRadius: '10px', margin: '100px auto', textAlign: 'center' }}>FAQ</h1>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor=""
                    variant="fullWidth"

                    backgroundColor='rgba(243, 52, 89, 1)'
                    aria-label="full width tabs example"
                >
                    <Tab style={{ fontSize: '16px', fontWeight: 'bold' }} label="cera kerja" {...a11yProps(0)} />
                    <Tab style={{ fontSize: '16px', fontWeight: 'bold' }} label="keamanan" {...a11yProps(1)} />
                    <Tab style={{ fontSize: '16px', fontWeight: 'bold' }} label="kriteria member" {...a11yProps(2)} />
                    <Tab style={{ fontSize: '16px', fontWeight: 'bold' }} label="upgrade PRO" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ul style={{ listStyle: 'none', fontFamily: "Comic Neue, cursive" }}>
                        <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between" onClick={handleClick} id='list1'>
                            <li> <h3 style={{ fontWeight: '700' }}>bagaimana alur kerja web ini?</h3> </li>
                            <p style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                        </div>
                        <p id='item1' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                        <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between" onClick={handleClick} id='list2'>
                            <li> <h3 style={{ fontWeight: '700' }}>apakah disini menjual subscriber</h3> </li>
                            <p style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                        </div>
                        <p id='item2' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                        <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between" onClick={handleClick} id='list3'>
                            <li> <h3 style={{ fontWeight: '700' }}>apakah disini menjual watchtime</h3> </li>
                            <p style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                        </div>
                        <p id='item3' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                        <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between" onClick={handleClick} id='list4'>
                            <li> <h3 style={{ fontWeight: '700' }}>apakah ada mentor untuk konsultasi?</h3> </li>
                            <p style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                        </div>
                        <p id='item4' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                        <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between" onClick={handleClick} id='list5'>
                            <li> <h3 style={{ fontWeight: '700' }}>berapa lama sava bisa mendapatkan subscriber jika saya daftar sekarang?</h3> </li>
                            <p style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                        </div>
                        <p id='item5' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
