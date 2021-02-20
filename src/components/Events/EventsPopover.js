import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
    popoverRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const EventsPopover = (props) => {
    const { name, date, img, longDescription } = props.event,
    classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
            <Popover open={true} onClose={handleClose} anchorReference={"none"} classes={{ root: classes.popoverRoot }}>
                <div className="exit" onClick={handleClose}> x </div>
                <div className="ePopOver" >
                    <h1 className='hdr'>{name}</h1>
                    <h3 className='eDate'>
                        {<Moment format="YYYY/MM/DD">
                            {date}
                        </Moment>}
                    </h3>
                    <img src={img} alt="img" />
                    <p className='eDesc'>{longDescription}</p>
                </div>
            </Popover>
        </div>
    );
};

export default EventsPopover;