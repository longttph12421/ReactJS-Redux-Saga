//------------------------------------------------------
//  REACT
//------------------------------------------------------
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//------------------------------------------------------
//  MATERIAL - UI
//------------------------------------------------------
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------
import Navbar from './Navbar';
import Styles from './styles';
import Sidebar from './Sidebar';
import routes from '../../../configures/routers';
//------------------------------------------------------

export default function DefaultLayout() {
  const classes = Styles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showContent = (routes) => {
    var content = null;
    if (routes.length > 0) {
      content = routes.map((rou, index) => {
        return (
          <Route
            key={index}
            path={rou.path}
            exact={rou.exact}
            component={rou.main}
          />
        );
      });
    }
    return <Switch>{content}</Switch>;
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <Sidebar
        classes={classes}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>{showContent(routes)}</Typography>
      </main>
    </div>
  );
}
