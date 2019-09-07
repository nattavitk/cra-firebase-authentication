import React from "react";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";

import { withAuthorization } from "../UserManagement/Session";
import Deck from "../Swipe/Deck";

const useStyles = makeStyles({
    root: {
        background: "#f88a00",
        position: "fixed",
        overflow: "hidden",
        width: "100%",
        "max-width": "100%",
        height: "100%",
        cursor: `url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")39 39,auto`
    }
});

const HomePage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Deck />
        </Container>
    );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
