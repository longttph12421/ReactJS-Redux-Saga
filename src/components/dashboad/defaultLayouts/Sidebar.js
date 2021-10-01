//------------------------------------------------------
//  REACT
//------------------------------------------------------
import React from 'react';
import { useHistory } from 'react-router-dom';
//------------------------------------------------------
//  MATERIAL - UI
//------------------------------------------------------
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CategoryIcon from '@material-ui/icons/Category';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import HomeIcon from '@material-ui/icons/Home';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

//------------------------------------------------------

function Sidebar(props) {
  const { open, classes, handleDrawerClose } = props;
  const theme = useTheme();
  const history = useHistory();
  const TextArray = ['Home', 'Product', 'Category', 'Bin'];
  const IconArray = [
    <HomeIcon />,
    <EventAvailableOutlinedIcon />,
    <CategoryIcon />,
    <DeleteOutlineOutlinedIcon />,
  ];
  const handleClick = (e, index) => {
    history.push('/' + TextArray[index]);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {TextArray.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {IconArray[index]}
            </ListItemIcon>
            <ListItemText
              primary={text}
              onClick={(e) => {
                handleClick(e, index);
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default Sidebar;
