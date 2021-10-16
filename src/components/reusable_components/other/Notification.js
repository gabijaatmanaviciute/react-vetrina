import { makeStyles } from "@material-ui/core";
import React from 'react';

function Notification({value}) {
    const classes = useStyles();

    return (
        <div className={classes.notification}>
            <span>{value}</span>
        </div>
    )
}

export default Notification

const useStyles = makeStyles((theme) => ({
notification: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.common.green,
    color: theme.palette.common.white,
    borderRadius: "50%",
    minWidth: "1.5rem",
    height: "1.5rem",
    margin: "0 1rem",
    fontSize: "0.725rem",
    fontFamily: "Noto Sans HK"
}
}));