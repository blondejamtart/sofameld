import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from '@material-ui/core/styles';
import DrawerHeader from './drawerHeader.component';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";

const drawerWidth = 360;

const styles = () => ({
    drawer: {
        width: drawerWidth,
        height: '64px',
    },
    drawerContents: {
        maxWidth: '100%',
        height: '100%',
        overflowX: 'hidden',
    },
});

const DrawerContainer = props => {
    const [isOpen, setOpen] = useState(props.open);
    return (
        <div style={{width: '100%', height: '100%'}}>
            <div style={{width: '100%', height: '64px'}}>
                <AppBar>
                    <div style={{
                        display: 'flex',
                        height: '64px',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography variant="h4" style={{flexGrow: 1}}>SofaMeld</Typography>
                        <img src={logo} className="App-logo" alt="logo"
                             style={{height: '48px', flexGrow: 0, padding: '8px'}}/>
                    </div>
                </AppBar>
            </div>
            <Drawer
                variant="persistent"
                open={isOpen}
                anchor="left"
                classes={{paper: props.classes.drawer}}
                PaperProps={{
                    style: {
                        height: '100%',
                    },
                }}
            >
                <div className={props.classes.drawerContents}>
                    <DrawerHeader
                        title="Categories"
                        closeAction={() => { setOpen(false) }}
                    />
                </div>
            </Drawer>
            <div style={{
                marginLeft: isOpen ? drawerWidth : 0,
                height: 'calc(100% - 112px)',
                width: isOpen ? `calc(100% - ${drawerWidth + 46}px)` : '100%'
            }}>
                {props.children}
            </div>
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(DrawerContainer);
