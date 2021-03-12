import SnackBar from './SnackBar';
import { API_PATH, SNACKBAR_PROPS } from '../Constants';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EventsIcon from '@material-ui/icons/EventAvailable';
import ActivitiesIcon from '@material-ui/icons/MenuBook';
import ExperimentsIcon from '@material-ui/icons/Colorize';
import PicsIcon from '@material-ui/icons/PersonPin';
import GalleryIcon from '@material-ui/icons/Wallpaper';
import VideoIcon from '@material-ui/icons/Videocam';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`scrollable-force-tabpanel-${index}`} aria-labelledby={`scrollable-force-tab-${index}`} {...other}>
        {
            value === index && (<Box p={3}>{children}</Box>)
        }
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`
    };
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    biggerFont: {
        fontWeight: 'bold',
        fontSize: '100%'
    },
    sizes: {
        width: '100%',
        textAlign: 'start'
    },
    btn: {
        fontSize: '120%',
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
        marginTop: 15
    },
    navigation: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    navigationAction: {
        fontWeight: 'bold',
        fontSize: '150%'
    },
    formControlSticky: {
        marginLeft: 0,
        marginTop: 5,
        paddingLeft: 27
    },
    inputLabelSticky: {
        padding: 2
    },
    formColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    noLineHeight: {
        lineHeight: 0
    },
    customHeight: {
        height: 15
    }
}));

export default function Admin() {
    const classes = useStyles(),
    [value, setValue] = useState(0),
    [navigationValue, setNavigationValue] = useState(0),
    [eventName, setEventName] = useState(''),
    [eventImg, setEventImg] = useState(''),
    [eventShortDesc, setEventShortDesc] = useState(''),
    [eventLongDesc, setEventLongDesc] = useState(''),
    [eventDuration, setEventDuration] = useState(''),
    [courseName, setCourseName] = useState(''),
    [courseImg, setCourseImg] = useState(''),
    [courseShortDesc, setCourseShortDesc] = useState(''),
    [courseLongDesc, setCourseLongDesc] = useState(''),
    [courseDuration, setCourseDuration] = useState(''),
    [courseLink, setCourseLink] = useState(''),
    [experimentName, setExperimentName] = useState(''),
    [experimentImg, setExperimentImg] = useState(''),
    [experimentShortDesc, setExperimentShortDesc] = useState(''),
    [experimentLongDesc, setExperimentLongDesc] = useState(''),
    [experimentCategory, setExperimentCategory] = useState(''),
    [imageName, setImageName] = useState(''),
    [imgURL, setImgURL] = useState(''),
    [imageCategory, setImageCategory] = useState(''),
    [imageForWebsite, setImageForWebsite] = useState(''),
    [videoName, setVideoName] = useState(''),
    [videoURL, setVideoURL] = useState(''),
    [videoDesc, setVideoDesc] = useState(''),
    [videoForWebsite, setVideoForWebsite] = useState(''),
    [eventForWebsite, setEventForWebsite] = useState(''),
    [courseForWebsite, setCourseForWebsite] = useState(''),
    [experimentForWebsite, setExperimentForWebsite] = useState(''),
    [eventIsSticky, setEventIsSticky] = useState(false),
    [eventStickyOrder, setEventStickyOrder] = useState(5),
    [courseIsSticky, setCourseIsSticky] = useState(false),
    [courseStickyOrder, setCourseStickyOrder] = useState(5),
    [experimentIsSticky, setExperimentIsSticky] = useState(false),
    [experimentStickyOrder, setExperimentStickyOrder] = useState(5),
    [snack, setSnack] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getYouTubeVideoId = (url) => {
        const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
    }

    const handleSubmitEvent = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/events/new`, { name: eventName, img: eventImg, shortDescription: eventShortDesc, longDescription: eventLongDesc, duration: eventDuration, forWebsite: eventForWebsite, sticky: eventIsSticky, stickyOrder: eventStickyOrder });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleSubmitCourse = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/courses/new`, { name: courseName, img: courseImg, shortDescription: courseShortDesc, longDescription: courseLongDesc, duration: courseDuration, courseLink, forWebsite: courseForWebsite, sticky: courseIsSticky, stickyOrder: courseStickyOrder });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleSubmitExperiment = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/experiments/new`, { name: experimentName, img: experimentImg, shortDescription: experimentShortDesc, longDescription: experimentLongDesc, category: experimentCategory, forWebsite: experimentForWebsite, sticky: experimentIsSticky, stickyOrder: experimentStickyOrder });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleSubmitImage = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}/images/new`, { name: imageName, img: imgURL, category: imageCategory, forWebsite: imageForWebsite });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleSubmitVideo = async(e) => {
        e.preventDefault();
        try {
            const thumbnail = `https://img.youtube.com/vi/${getYouTubeVideoId(videoURL)}/hqdefault.jpg`
            await axios.post(`${API_PATH}/videos/new`, { name: videoName, video: videoURL, thumbnail, description: videoDesc, forWebsite: videoForWebsite });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" indicatorColor="primary" textColor="primary">
                <Tab className={classes.biggerFont} label="أحداث المركز" icon={<EventsIcon />} {...a11yProps(0)} />
                <Tab className={classes.biggerFont} label="نشاطات ودورات" icon={<ActivitiesIcon />} {...a11yProps(1)} />
                <Tab className={classes.biggerFont} label="تجارب ومُحاكاة" icon={<ExperimentsIcon />} {...a11yProps(2)} />
                <Tab className={classes.biggerFont} label="معرض الصور" icon={<GalleryIcon />} {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <form onSubmit={handleSubmitEvent} className={classes.formColumn}>
                    <TextField required onInput={e => setEventName(e.target.value)} name="eventName" label="عنوان الحدث" className={classes.sizes} />
                    <TextField onInput={e => setEventImg(e.target.value)} name="eventImg" label="رابط الصورة" className={classes.sizes} />
                    <TextField required onInput={e => setEventShortDesc(e.target.value)} name="eventShortDesc" label="شرح مُختصر" className={classes.sizes} />
                    <TextField multiline rows={3} required onInput={e => setEventLongDesc(e.target.value)} name="eventLongDesc" label="شرح موسع" className={classes.sizes} />
                    <TextField onInput={e => setEventDuration(e.target.value)} name="eventDate" label="زمن الحدث" className={classes.sizes} />
                    <FormControl className={classes.sizes}>
                        <InputLabel required htmlFor="eventForWebsite">مكان الحدث</InputLabel>
                        <Select required variant="standard" label="مكان الحدث" name="eventForWebsite" value={eventForWebsite} onChange={e => setEventForWebsite(e.target.value)}>
                            <MenuItem value={'t'}>تبواح بايس</MenuItem>
                            <MenuItem value={'s'}>مركز الفضاء</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <FormControlLabel label="تثبيت بالصفحة الرئيسية" className={classes.formControlSticky} control={<Checkbox checked={eventIsSticky} onChange={e => setEventIsSticky(!eventIsSticky)} name="eventSticky" color="primary" />} />
                        <InputLabel className={classes.inputLabelSticky} htmlFor="eventPriority">تحديد الأولوية</InputLabel>
                        <Rating className={classes.noLineHeight} disabled={!eventIsSticky} size="large" name="eventPriority" value={eventStickyOrder} onChange={(event, newValue) => { setEventStickyOrder(newValue); }} />
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.btn}>أرسال</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <form onSubmit={handleSubmitCourse} className={classes.formColumn}>
                    <TextField required onInput={e => setCourseName(e.target.value)} name="courseName" label="اسم الدورة" className={classes.sizes} />
                    <TextField onInput={e => setCourseImg(e.target.value)} name="courseImg" label="رابط الصورة" className={classes.sizes} />
                    <TextField required onInput={e => setCourseShortDesc(e.target.value)} name="courseShortDesc" label="شرح مُختصر" className={classes.sizes} />
                    <TextField multiline rows={3} required onInput={e => setCourseLongDesc(e.target.value)} name="courseLongDesc" label="شرح موسع" className={classes.sizes} />
                    <TextField onInput={e => setCourseDuration(e.target.value)} name="courseDate" label="زمن الدورة" className={classes.sizes} />
                    <TextField onInput={e => setCourseLink(e.target.value)} name="courseLink" label="رابط التسجيل" className={classes.sizes} />
                    <FormControl className={classes.sizes}>
                        <InputLabel required htmlFor="courseForWebsite">مكان الدورة</InputLabel>
                        <Select required variant="standard" label="مكان الدورة" name="courseForWebsite" value={courseForWebsite} onChange={e => setCourseForWebsite(e.target.value)}>
                            <MenuItem value={'t'}>تبواح بايس</MenuItem>
                            <MenuItem value={'s'}>مركز الفضاء</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <FormControlLabel label="تثبيت بالصفحة الرئيسية" className={classes.formControlSticky} control={<Checkbox checked={courseIsSticky} onChange={e => setCourseIsSticky(!courseIsSticky)} name="courseSticky" color="primary" />} />
                        <InputLabel className={classes.inputLabelSticky} htmlFor="coursePriority">تحديد الأولوية</InputLabel>
                        <Rating className={classes.noLineHeight} disabled={!courseIsSticky} size="large" name="coursePriority" value={courseStickyOrder} onChange={(event, newValue) => { setCourseStickyOrder(newValue); }} />
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.btn}>أرسال</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <form onSubmit={handleSubmitExperiment} className={classes.formColumn}>
                    <TextField required onInput={e => setExperimentName(e.target.value)} name="experimentName" label="اسم التجربة / المُحاكاة" className={classes.sizes} />
                    <TextField onInput={e => setExperimentImg(e.target.value)} name="experimentImg" label="رابط الصورة" className={classes.sizes} />
                    <TextField required onInput={e => setExperimentShortDesc(e.target.value)} name="experimentShortDesc" label="شرح مُختصر" className={classes.sizes} />
                    <TextField multiline rows={3} required onInput={e => setExperimentLongDesc(e.target.value)} name="experimentLongDesc" label="شرح موسع" className={classes.sizes} />
                    <FormControl className={classes.sizes}>
                        <InputLabel required htmlFor="experimentCategory">فئة التجربة / المُحاكاة</InputLabel>
                        <Select required variant="standard" label="فئة التجربة / المُحاكاة" name="experimentCategory" value={experimentCategory} onChange={e => setExperimentCategory(e.target.value)}>
                            <MenuItem value={'Ch'}>كيمياء</MenuItem>
                            <MenuItem value={'Ph'}>فيزياء</MenuItem>
                            <MenuItem value={'Bio'}>بيولوجيا</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.sizes}>
                        <InputLabel required htmlFor="experimentForWebsite">مكان التجربة / المُحاكاة</InputLabel>
                        <Select required variant="standard" label="مكان التجربة / المُحاكاة" name="experimentForWebsite" value={experimentForWebsite} onChange={e => setExperimentForWebsite(e.target.value)}>
                            <MenuItem value={'t'}>تبواح بايس</MenuItem>
                            <MenuItem value={'s'}>مركز الفضاء</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <FormControlLabel label="تثبيت بالصفحة الرئيسية" className={classes.formControlSticky} control={<Checkbox checked={experimentIsSticky} onChange={e => setExperimentIsSticky(!experimentIsSticky)} name="experimentSticky" color="primary" />} />
                        <InputLabel className={classes.inputLabelSticky} htmlFor="experimentPriority">تحديد الأولوية</InputLabel>
                        <Rating className={classes.noLineHeight} disabled={!experimentIsSticky} size="large" name="experimentPriority" value={experimentStickyOrder} onChange={(event, newValue) => { setExperimentStickyOrder(newValue); }} />
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.btn}>أرسال</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <BottomNavigation value={navigationValue} onChange={(event, newNavigationValue) => { setNavigationValue(newNavigationValue); }} showLabels className={classes.navigation}>
                    <BottomNavigationAction className={classes.navigationAction} label="صور" icon={<PicsIcon />} />
                    <BottomNavigationAction className={classes.navigationAction} label="فيديو" icon={<VideoIcon />} />
                </BottomNavigation>
                {
                    !navigationValue ?
                    <form onSubmit={handleSubmitImage} className={classes.formColumn}>
                        <TextField required onInput={e => setImageName(e.target.value)} name="imageName" label="عنوان الصورة" className={classes.sizes} />
                        <TextField required onInput={e => setImgURL(e.target.value)} name="imgURL" label="رابط الصورة" className={classes.sizes} />
                        <TextField required onInput={e => setImageCategory(e.target.value)} name="imageCategory" label="فئة الصورة" className={classes.sizes} />
                        <FormControl className={classes.sizes}>
                            <InputLabel required htmlFor="imageForWebsite">مكان الصورة</InputLabel>
                            <Select required variant="standard" label="مكان الصورة" name="imageForWebsite" value={imageForWebsite} onChange={e => setImageForWebsite(e.target.value)}>
                                <MenuItem value={'t'}>تبواح بايس</MenuItem>
                                <MenuItem value={'s'}>مركز الفضاء</MenuItem>
                            </Select>
                        </FormControl>
                        <span className={classes.customHeight}></span>
                        <Button type="submit" variant="contained" color="primary" className={classes.btn}>أرسال</Button>
                    </form>
                    :
                    <form onSubmit={handleSubmitVideo} className={classes.formColumn}>
                        <TextField required onInput={e => setVideoName(e.target.value)} name="videoName" label="عنوان الفيديو" className={classes.sizes} />
                        <TextField required onInput={e => setVideoURL(e.target.value)} name="videoURL" label="رابط الفيديو - Youtube" className={classes.sizes} />
                        <TextField onInput={e => setVideoDesc(e.target.value)} name="videoDesc" label="شرح عن الفيديو" className={classes.sizes} />
                        <FormControl className={classes.sizes}>
                            <InputLabel required htmlFor="videoForWebsite">مكان الفيديو</InputLabel>
                            <Select required variant="standard" label="مكان الفيديو" name="videoForWebsite" value={videoForWebsite} onChange={e => setVideoForWebsite(e.target.value)}>
                                <MenuItem value={'t'}>تبواح بايس</MenuItem>
                                <MenuItem value={'s'}>مركز الفضاء</MenuItem>
                            </Select>
                        </FormControl>
                        <span className={classes.customHeight}></span>
                        <Button type="submit" variant="contained" color="primary" className={classes.btn}>أرسال</Button>
                    </form>
                }
            </TabPanel>
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </div>
    );
}