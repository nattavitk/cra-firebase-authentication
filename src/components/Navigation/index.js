import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

import SignOutButton from "../UserManagement/SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../UserManagement/Session";

const useStyles = makeStyles({
    root: {
        height: "5vh",
        position: "fixed",
        "z-index": 20
    },
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

const MenuButton = styled(Button)({
    color: "white",
    height: 48,
    padding: "0 30px"
});

const Navigation = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (side, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </div>
    );

    return (
        <div className={classes.root}>
            <MenuButton onClick={toggleDrawer("left", true)}>
                <MenuIcon />
            </MenuButton>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {sideList("left")}
            </SwipeableDrawer>
        </div>
    );
};

const NavAuth = [
    {
        to: ROUTES.LANDING,
        title: "Landing",
        icon: <InboxIcon />
    },
    {
        to: ROUTES.HOME,
        title: "Home",
        icon: <InboxIcon />
    },
    {
        to: ROUTES.ACCOUNT,
        title: "Account",
        icon: <InboxIcon />
    },
    {
        to: ROUTES.ADMIN,
        title: "Admin",
        icon: <InboxIcon />
    }
];

const NavNonAuth = [
    {
        to: ROUTES.LANDING,
        title: "Landing",
        icon: <InboxIcon />
    },
    {
        to: ROUTES.SIGN_IN,
        title: "Sign In",
        icon: <MailIcon />
    }
];

const NavigationAuth = () => (
    <>
        <List>
            {NavAuth.map((item, index) => (
                <ListItem button key={item.title} to={item.to} component={Link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <SignOutButton />
    </>
);

const NavigationNonAuth = () => (
    <>
        <List>
            {NavNonAuth.map((item, index) => (
                <ListItem button key={item.title} to={item.to} component={Link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItem>
            ))}
        </List>
    </>
);

export default Navigation;
