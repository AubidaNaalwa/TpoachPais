import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SpaceIcon from '@material-ui/icons/HomeWork';
import AboutIcon from '@material-ui/icons/Dvr';
import ContactIcon from '@material-ui/icons/ContactPhone';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiPaper-root': {
			backgroundColor: 'transparent'
		},
        marginBottom: 10
    },
    logo: {
        height: 70,
        marginRight: -5,
        marginLeft: theme.spacing(2)
    },
	links: {
		fontSize: '104%'
	},
	link_active: {
		color: 'rgba(24, 130, 201, 1)',
		display: 'flex',
		fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 10,
		textDecoration: 'none'
	},
	linkInactive: {
		display: 'flex',
		color: 'rgba(81, 74, 74, 0.8)',
		fontWeight: "bold",
		marginLeft: 10,
		marginRight: 10,
		textDecoration: 'none'
	},
	marginIcons: {
		marginRight: theme.spacing(1)
	}
}));

export default function NavBar() {
    const classes = useStyles(),
    location = useLocation();

    return (
        <div className={classes.root}>
            <Toolbar id="toolbar" className="main_navbar">
                <Link to="/">
                    <IconButton edge="start" color="inherit">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} className={classes.logo} alt="Logo" />
                    </IconButton>
                </Link>
                <Breadcrumbs separator='|' className={classes.links}>
                    <Link to="/" className={location.pathname === '/' || location.pathname.includes('/tpais') ? classes.link_active : classes.linkInactive}>
                        <HomeIcon /><span className={classes.marginIcons}>مركز العلوم والفنون</span>
                    </Link>
                    <Link to="/space" className={location.pathname.includes('/space') ? classes.link_active : classes.linkInactive}>
                        <SpaceIcon /><span className={classes.marginIcons}>مركز فضاء الطيبة</span>
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? classes.link_active : classes.linkInactive}>
                        <AboutIcon /><span className={classes.marginIcons}>عن المركز</span>
                    </Link>
                    <Link to="/contactus" className={location.pathname === '/contactus' ? classes.link_active : classes.linkInactive}>
                        <ContactIcon /><span className={classes.marginIcons}>تواصل معنا</span>
                    </Link>
                </Breadcrumbs>
            </Toolbar>
        </div>
    );
}