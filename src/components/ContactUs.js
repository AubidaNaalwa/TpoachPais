import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { API_PATH, SNACKBAR_PROPS } from '../Constants';
import SnackBar from './SnackBar';
import axios from 'axios';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '102%'
    },
    form_control: {
        width: '100%'
    },
    label: {
        color: "#2d3940",
        fontSize: '85%',
        marginRight: 3
    },
    input: {
        backgroundColor: 'white',
    },
    btn: {
        width: 100,
        padding: 8,
        fontSize: '110%'
    },
    center: {
        textAlign: 'center'
    },
    lbl_fill_text: {
        fontSize: '95%',
        textAlign: 'center',
        marginBottom: 15
    },
    navigation: {
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: 5,
        marginBottom: 7
    },
    navigation_action: {
        fontSize: '130%',
        fontWeight: 'bold',
        padding: 0
    }
}));

export default function ContactUs() {
    const classes = useStyles(),
    [snack, setSnack] = useState({ message: "", severity: "" }),
    [fullname, setFullname] = useState(''),
    [email, setEmail] = useState(''),
    [message, setMessage] = useState(''),
    [value, setValue] = useState(0);

    const handleContactSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}contactus`, { fullname, email, message });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    return (
        <div className="content">
            <p className={classes.lbl_fill_text}>
            تبواح بايس ومركز فضاء الطيبة،
            <br />
            يقعا في مدينة الطيبة، المدخل الشمالي، بجانب مدرسة الاخوة الاعدادية.
            <br />
            ساعات الدوام: الأحد للخميس 8:00 - 16:00.
            </p>
            <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }} showLabels className={classes.navigation}>
                <BottomNavigationAction href="tel:097996672" className={classes.navigation_action} label="097996672" icon={<PhoneIcon />} />
                <BottomNavigationAction href="https://www.facebook.com/markaz.st" target="_blank" className={classes.navigation_action} label="Facebook" icon={<FacebookIcon />} />
                <BottomNavigationAction href="https://wa.me/972524850146" target="_blank" className={classes.navigation_action} label="Whatsapp" icon={<WhatsAppIcon />} />
                <BottomNavigationAction href="mailto:markaz.s.t@gmail.com" target="_blank" className={classes.navigation_action} label="Email" icon={<EmailIcon />} />
            </BottomNavigation>
            <iframe title="map" src="https://embed.waze.com/ar/iframe?zoom=17&lat=32.953067&lon=35.186011&ct=livemap&pin=1" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
            <div className={classes.lbl_fill_text}>او املأ نموذجاً قصيراً وسنقوم بالرد عليك</div>
            <form onSubmit={handleContactSubmit}>
                <Grid container spacing={2} direction="row" justify="center" alignItems="center" className={classes.grid}>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.form_control}>
                            <label htmlFor="fullname" className={classes.label}>الاسم الكامل</label>
                            <TextField onInput={e => setFullname(e.target.value)} className={classes.input} name="fullname" variant="outlined" required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.form_control}>
                            <label htmlFor="email" className={classes.label}>البريد الالكتروني</label>
                            <TextField onInput={e => setEmail(e.target.value)} className={classes.input} name="email" variant="outlined" required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={classes.form_control}>
                            <label htmlFor="message" className={classes.label}>نص الرسالة</label>
                            <TextField onInput={e => setMessage(e.target.value)} className={classes.input} name="message" rows={3} multiline variant="outlined" required />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.center}>
                        <Button className={classes.btn} variant="contained" color="primary" type="submit">ارسال</Button>
                    </Grid>
                </Grid>
            </form>
            <SnackBar message={snack.message} severity={snack.severity} />
        </div>
    )
}