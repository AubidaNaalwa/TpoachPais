import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Iframe from 'react-iframe';

export default function Videos(props) {
    const [open, setOpen] = React.useState(false);
    const [display, setDisplay] = useState(false)
    const handleClick = function () {
        setDisplay(!display)
    }

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (
        <div className="thumb-wrap">
            <Iframe url={props.video.video} width="100%" height="200" id="myId" className="thumb" display="initial" position="relative" allowFullScreen />

            <div className="thumb-info">
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            placement="bottom-end"
                            title={props.video.name}

                        >
                            <p onClick={handleTooltipOpen} className="thumb-title">{props.video.name}</p>
                        </Tooltip>
                    </div>
                </ClickAwayListener>
                {!display ? <p onClick={handleClick} className="thumb-text1">{props.video.description}</p> :
                    <p onClick={handleClick} className="thumb-text2">{props.video.description}</p>}
            </div>
        </div>
    )
}