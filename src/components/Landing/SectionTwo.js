import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/smurfs-logo.png";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: "100vh",
        padding: "0 30px",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "max-width": "100%"
    }
});

const SectionTwo = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container className={classes.root} maxWidth="sm">
                <img src={logo} alt="logo" />
            </Container>
        </>
    );
};

export default SectionTwo;
