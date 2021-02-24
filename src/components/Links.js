import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SpaceIcon from '@material-ui/icons/HomeWork';
import AboutIcon from '@material-ui/icons/Dvr';
import ContactIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles((theme) => ({
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
	link_inactive: {
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

export default function Links() {
	const classes = useStyles(),
	location = useLocation();

	return (
		<Breadcrumbs separator='|' aria-label="breadcrumb" className={classes.links}>
			<Link to="/" className={location.pathname === '/' || location.pathname.includes('/tpais') ? classes.link_active : classes.link_inactive}>
				<HomeIcon /><span className={classes.marginIcons}>مركز العلوم والفنون</span>
			</Link>
			<Link to="/space" className={location.pathname.includes('/space') ? classes.link_active : classes.link_inactive}>
				<SpaceIcon /><span className={classes.marginIcons}>مركز فضاء الطيبة</span>
			</Link>
			<Link to="/about" className={location.pathname === '/about' ? classes.link_active : classes.link_inactive}>
				<AboutIcon /><span className={classes.marginIcons}>عن المركز</span>
			</Link>
			<Link to="/contactus" className={location.pathname === '/contactus' ? classes.link_active : classes.link_inactive}>
				<ContactIcon /><span className={classes.marginIcons}>تواصل معنا</span>
			</Link>
		</Breadcrumbs>
	);
}