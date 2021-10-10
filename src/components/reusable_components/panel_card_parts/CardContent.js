import React from 'react';
import {makeStyles} from "@material-ui/core";

function CardContent({children, className, ...restProps}) {
    const classes = useStyles();
    return (
        <div className={`${classes.cardContent} ${className}`} {...restProps}>
            {children}
        </div>
    )
}

export default CardContent

const useStyles = makeStyles({
cardContent: {
    margin: "1.5rem 0",
}
});