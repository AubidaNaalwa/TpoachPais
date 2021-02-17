import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Links from './Links';
import { Link, useLocation } from 'react-router-dom';
import TPaisMenu from './TPaisMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
			backgroundColor: "transparent !important"
		}
    },
    inputRoot: {
        color: 'inherit'
    },
    logo: {
        height: 70,
        transition: "transform 0.5s",
        marginLeft: theme.spacing(1)
    }
}));

export default function NavBar() {
    const classes = useStyles(),
    location = useLocation();

    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Link to="/" className={classes.inputRoot}>
                    <IconButton edge="start" color="inherit">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} className={classes.logo} alt="Logo" />
                    </IconButton>
                </Link>
                <Links />
            </Toolbar>
        </AppBar>
        { !location.pathname.includes('/space') && <TPaisMenu /> }
    </div>
    );
}