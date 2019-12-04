import React from 'react';
import ReactPlayer from "react-player";
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import 'typeface-yekan'
import logo from './logo.svg';
import './App.css';
import {createMuiTheme} from "@material-ui/core";

function App() {
    const theme = createMuiTheme({palette: {type: 'dark'}});
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App"
                 style={{background: theme.palette.background.default, height: `${window.innerHeight}`}}>
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
                <Paper style={{
                    display: 'flex',
                    height: `calc(${window.innerHeight}px - 80px)`,
                    width: 'calc(100% - 16px)',
                    padding: '4px',
                    margin: '4px'
                }}>
                    <ReactPlayer controls height="100%" url="http://192.168.178.60:8000/Strike%20Witches%20Ep12.m4v"/>
                </Paper>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
