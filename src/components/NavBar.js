import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Links from './Links';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiPaper-root': {
			backgroundColor: 'transparent'
		}
    },
    inputRoot: {
        color: 'inherit'
    },
    logo: {
        height: 70,
        marginLeft: theme.spacing(1)
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className="mobile_navbar_fix">
                <Toolbar>
                    <Link to="/" className={classes.inputRoot} >
                        <IconButton edge="start" color="inherit">
                            <img src={process.env.PUBLIC_URL + '/logo.png'} className={classes.logo} alt="Logo" />
                        </IconButton>
                    </Link>
                    <Links />
                </Toolbar>
            </AppBar>
        </div>
    );
}