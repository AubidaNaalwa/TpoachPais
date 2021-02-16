import SnackBar from './SnackBar';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import EventsIcon from '@material-ui/icons/EventAvailable';
import ActivitiesIcon from '@material-ui/icons/LocalActivity';
import { API_PATH, SNACKBAR_PROPS } from '../Constants';
import axios from 'axios';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`
    };
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    biggerFont: {
        fontWeight: 'bold',
        fontSize: '110%'
    },
    date_size: {
        width: 170
    }
}));

export default function Admin() {
    const classes = useStyles(),
    [value, setValue] = React.useState(0),
    [eventName, setEventName] = useState(''),
    [eventImg, setEventImg] = useState(''),
    [eventShortDesc, setEventShortDesc] = useState(''),
    [eventLongDesc, setEventLongDesc] = useState(''),
    [eventDate, setEventDate] = useState(''),
    [courseName, setCourseName] = useState(''),
    [courseImg, setCourseImg] = useState(''),
    [courseShortDesc, setCourseShortDesc] = useState(''),
    [courseLongDesc, setCourseLongDesc] = useState(''),
    [courseDate, setCourseDate] = useState(''),
    [imageName, setImageName] = useState(''),
    [imgURL, setImgURL] = useState(''),
    [imageShortDesc, setImageShortDesc] = useState(''),
    [imageCategory, setImageCategory] = useState(''),
    [snack, setSnack] = useState({ message: "", severity: "" });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmitEvent = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/event`, {name: eventName, img: eventImg, shortDescription: eventShortDesc, longDescription: eventLongDesc, toDate: eventDate});
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleSubmitCourse = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/course`, {name: courseName, img: courseImg, shortDescription: courseShortDesc, longDescription: courseLongDesc, toDate: courseDate});
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleSubmitImage = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/image`, {name: imageName, img: imgURL, shortDescription: imageShortDesc, category: imageCategory});
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off">
                <Tab className={classes.biggerFont} label="أحداث" icon={<EventsIcon />} aria-label="أحداث" {...a11yProps(0)} />
                <Tab className={classes.biggerFont} label="نشاطات" icon={<ActivitiesIcon />} aria-label="نشاطات" {...a11yProps(1)} />
                <Tab className={classes.biggerFont} label="صور" icon={<PersonPinIcon />} aria-label="صور" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <form onSubmit={handleSubmitEvent}>
                    <TextField required onInput={e => setEventName(e.target.value)} name="eventName" placeholder="اسم الحدث" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setEventImg(e.target.value)} name="eventImg" placeholder="رابط صورة" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setEventShortDesc(e.target.value)} name="eventShortDesc" placeholder="شرح مختصر" direction="right" />
                    <br/><br/>
                    <TextField multiline required onInput={e => setEventLongDesc(e.target.value)} name="eventLongDesc" placeholder="شرح موسع" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setEventDate(e.target.value)} name="eventDate" label="تاريخ الحدث" type="date" format="yyyy-MM-dd" className={classes.date_size} InputLabelProps={{ shrink: true }} />
                    <br/><br/>
                    <Button type="submit" variant="contained" color="primary" startIcon={<Icon>send</Icon>}>&nbsp;&nbsp;&nbsp;أرسال</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <form onSubmit={handleSubmitCourse}>
                    <TextField required onInput={e => setCourseName(e.target.value)} name="courseName" placeholder="اسم الدورة" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setCourseImg(e.target.value)} name="courseImg" placeholder="رابط صورة" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setCourseShortDesc(e.target.value)} name="courseShortDesc" placeholder="شرح مختصر" direction="right" />
                    <br/><br/>
                    <TextField multiline required onInput={e => setCourseLongDesc(e.target.value)} name="courseLongDesc" placeholder="شرح موسع" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setCourseDate(e.target.value)} name="courseDate" label="تاريخ الدورة" type="date" format="yyyy-MM-dd" className={classes.date_size} InputLabelProps={{ shrink: true }} />
                    <br/><br/>
                    <Button type="submit" variant="contained" color="primary" startIcon={<Icon>send</Icon>}>&nbsp;&nbsp;&nbsp;أرسال</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <form onSubmit={handleSubmitImage}>
                    <TextField required onInput={e => setImageName(e.target.value)} name="imageName" placeholder="اسم الصورة" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setImgURL(e.target.value)} name="imgURL" placeholder="رابط صورة" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setImageShortDesc(e.target.value)} name="imageShortDesc" placeholder="شرح مختصر" direction="right" />
                    <br/><br/>
                    <TextField required onInput={e => setImageCategory(e.target.value)} name="imageCategory" placeholder="فئة الصورة" direction="right" />
                    <br/><br/>
                    <Button type="submit" variant="contained" color="primary" startIcon={<Icon>send</Icon>}>&nbsp;&nbsp;&nbsp;أرسال</Button>
                </form>
            </TabPanel>
            <SnackBar message={snack.message} severity={snack.severity} />
        </div>
    );
}