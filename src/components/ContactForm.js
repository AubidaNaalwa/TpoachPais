import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { API_PATH, SNACKBAR_PROPS } from '../Constants';
import SnackBar from './SnackBar';
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
    }
}));

export default function Space() {
    const classes = useStyles(),
    [snack, setSnack] = useState({ message: "", severity: "" }),
    [fullname, setFullname] = useState(''),
    [email, setEmail] = useState(''),
    [message, setMessage] = useState('');

    const handleContactSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_PATH}contactus`, { fullname, email, message });
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SENT, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch {
            setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    return (
        <>
            <div className={classes.lbl_fill_text}>املأ نموذجاً قصيراً وسنقوم بالرد عليك</div>
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
        </>
    );
}
