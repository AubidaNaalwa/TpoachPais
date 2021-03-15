import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { API_PATH, SNACKBAR_PROPS, isValidFullName, isValidEmail, isValidMessage } from '../Constants';
import SnackBar from './SnackBar';
import LoadingSpinner from './LoadingSpinner';
import DoneIcon from '@material-ui/icons/AssignmentTurnedIn';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    grid: {
        width: '102%'
    },
    form_control: {
        width: '100%'
    },
    label: {
        color: "#2d3940",
        //color: "#bdb76b", for space TODO
        fontSize: '85%',
        marginRight: 3
    },
    input: {
        backgroundColor: 'white',
    },
    btn: {
        width: 100,
        padding: 8,
        fontSize: '110%',
        color: 'white'
    },
    center: {
        textAlign: 'center'
    },
    lbl_fill_text: {
        fontSize: '95%',
        textAlign: 'center',
        marginBottom: 15
    },
    emailSent: {
        color: '#0f4242',
        textAlign: 'center',
        cursor: 'default'
    },
    middleIcon: {
        verticalAlign: 'middle'
    }
}));

export default function ContactForm() {
    const classes = useStyles(),
    [snack, setSnack] = useState(''),
    [fullname, setFullName] = useState(''),
    [email, setEmail] = useState(''),
    [isLoading, setLoading] = useState(false),
    [message, setMessage] = useState(''),
    [emailSent, setEmailSent] = useState(false);

    const handleContactSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        if (!fullname || !email || !message)
            setSnack({ message: SNACKBAR_PROPS.MessageType.INFO_EMPTY, severity: SNACKBAR_PROPS.SeverityType.INFO});
        else if (!isValidFullName(fullname))
            setSnack({ message: SNACKBAR_PROPS.MessageType.WARNING_FULLNAME, severity: SNACKBAR_PROPS.SeverityType.WARNING});
        else if (!isValidEmail(email))
            setSnack({ message: SNACKBAR_PROPS.MessageType.WARNING_EMAIL, severity: SNACKBAR_PROPS.SeverityType.WARNING});
        else if (!isValidMessage(message))
            setSnack({ message: SNACKBAR_PROPS.MessageType.WARNING_MESSAGE, severity: SNACKBAR_PROPS.SeverityType.WARNING});
        else {
            try {
                await axios.post(`${API_PATH}/contactus`, { fullname, email, message });
                setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_EMAIL_SENT, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
                setFullName('');
                setEmail('');
                setMessage('');
                setEmailSent(true);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR});
            }
        }
        setLoading(false);
    }

    return (
        <>
            <center style={{marginTop:'20px'}}>
                <iframe title="like" src="https://www.facebook.com/plugins/like.php?locale=ar_AR&href=https%3A%2F%2Fwww.facebook.com%2F%26%23x62a%3B%26%23x628%3B%26%23x648%3B%26%23x627%3B%26%23x62d%3B-%26%23x648%3B%26%23x645%3B%26%23x631%3B%26%23x643%3B%26%23x632%3B-%26%23x641%3B%26%23x636%3B%26%23x627%3B%26%23x621%3B-%26%23x627%3B%26%23x644%3B%26%23x637%3B%26%23x64a%3B%26%23x628%3B%26%23x629%3B-334755379982653&width=174&layout=button_count&action=like&size=large&share=true&height=28&appId" width="178" height="28" scrolling="no" frameBorder="0" allowFullScreen={true} allow="clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </center>
            <div className={classes.lbl_fill_text}>املأ نموذجاً قصيراً وسنقوم بالرد عليك</div>
            {
                isLoading ? <LoadingSpinner disableVerticalCenter={true} /> :
                emailSent ? <div className={classes.emailSent}><DoneIcon className={classes.middleIcon} /> لقد تم ارسال النموذج بنجاح <DoneIcon className={classes.middleIcon} /></div> :
                <form onSubmit={handleContactSubmit}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center" className={classes.grid}>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.form_control}>
                                <label htmlFor="fullname" className={classes.label}>الاسم الكامل</label>
                                <TextField inputProps={{ maxLength: 20 }} error={fullname.length !== 0 && !isValidFullName(fullname)} onInput={e => setFullName(e.target.value)} value={fullname} className={classes.input} name="fullname" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.form_control}>
                                <label htmlFor="email" className={classes.label}>البريد الالكتروني</label>
                                <TextField inputProps={{ maxLength: 40 }} error={email.length !== 0 && !isValidEmail(email)} onInput={e => setEmail(e.target.value)} value={email} className={classes.input} name="email" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.form_control}>
                                <label htmlFor="message" className={classes.label}>نص الرسالة</label>
                                <TextField inputProps={{ maxLength: 200 }} error={message.length !== 0 && !isValidMessage(message)} onInput={e => setMessage(e.target.value)} value={message} className={classes.input} name="message" rows={3} multiline variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} className={classes.center}>
                            <Button className={classes.btn} variant="contained" color="primary" type="submit">ارسال</Button>
                        </Grid>
                    </Grid>
                </form>
            }
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </>
    );
}
