import React from 'react';
//------------------------------------------------------
//  MATERIAL - UI
//------------------------------------------------------
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------
import constants from '../../configures/constants';
import styles from '../../containers/product/styles';
//------------------------------------------------------

function EnhancedTableToolbar(props) {
  const { classes, numSelected, CategoryList, handleFilter } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteAll = () => {};
  return (
    <Toolbar
      className={clsx(classes.Toolbar, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Product List
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteAll}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <div>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list" onClick={handleClick}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: constants.ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {CategoryList.map((value, index) => (
              <MenuItem
                key={index}
                onClick={(event) => {
                  handleFilter(event, index, value);
                }}
              >
                {value.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
    </Toolbar>
  );
}
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
export default withStyles(styles)(EnhancedTableToolbar);
