import React from 'react';
import ReactPlayer from "react-player";
import { ThemeProvider } from '@material-ui/core/styles';
// import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import 'typeface-yekan'
import './App.css';
import {createMuiTheme} from "@material-ui/core";

import DrawerContainer from './drawerContainer/drawerContainer.component';

require('typeface-oswald');

function App() {
    const theme = createMuiTheme({palette: {type: 'dark'}});
    return (
        <ThemeProvider theme={theme}>
            <div className="App"
                 style={{background: theme.palette.background.default, height: `${window.innerHeight}px`}}>
                <DrawerContainer open>
                    <Paper style={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        padding: '16px',
                        margin: '8px'
                    }}>
                        <ReactPlayer controls height="100%" width="100%"
                                     url={`http://${window.location.host.split(':')[0]}:8000/Strike%20Witches%20Ep12.m4v`}/>
                    </Paper>
                </DrawerContainer>
            </div>
        </ThemeProvider>
    );
}

export default App;
