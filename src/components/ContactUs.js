import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from './ContactForm';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles(() => ({
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
        padding: 0,
        "&:hover": {
            transform: 'scale(1.05)',
            transition: '0.2s transform'
        }
    }
}));

export default function ContactUs() {
    const classes = useStyles(),
    [value, setValue] = useState(0);

    return (
        <>
            <p className={classes.lbl_fill_text}>
            مركز العلوم 'تبواح بايس' ومركز فضاء الطيبة،
            <br />
            يقع في مدينة الطيبة، المدخل الشمالي، بالقرب من مدرسة الاخوة الاعدادية.
            <br />
            ساعات الدوام: الأحد للخميس 8:00 - 16:30.
            </p>
            <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }} showLabels className={classes.navigation}>
                <BottomNavigationAction href="tel:097996672" className={classes.navigation_action} label="097996672" icon={<PhoneIcon />} />
                <BottomNavigationAction href="https://www.facebook.com/markaz.st" target="_blank" className={classes.navigation_action} label="Facebook" icon={<FacebookIcon />} />
                <BottomNavigationAction href="https://wa.me/972524850146" target="_blank" className={classes.navigation_action} label="WhatsApp" icon={<WhatsAppIcon />} />
                <BottomNavigationAction href="mailto:markaz.s.t@gmail.com" target="_blank" className={classes.navigation_action} label="Email" icon={<EmailIcon />} />
            </BottomNavigation>
            <iframe title="map" src="https://embed.waze.com/ar/iframe?zoom=17&lat=32.953067&lon=35.186011&ct=livemap&pin=1" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
            <ContactForm />
        </>
    );
}