import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NavigationClose from '@material-ui/icons/Close';

const styles = {
  toolbar: {
    minWidth: 320,
    display: 'flex',
    padding: '0 8px',
  },
  title: {
    flexGrow: 1,
  },
};

const DrawerHeader = props => (
  <div>
    <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <IconButton onClick={props.closeAction}>
          <NavigationClose />
        </IconButton>
        <Typography variant="h6" color="inherit" style={styles.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default DrawerHeader;
