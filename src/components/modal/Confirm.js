import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Box, Button } from '@material-ui/core';
import styles from './styles';

class Confirm extends Component {
  render() {
    const { row, classes, closeModel, handleDelete } = this.props;
    return (
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Are you sure you want to delete{' '}
          <span className={classes.modalConfirmTextBold}>{row.name}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={3}>
          <Box ml={1}>
            <Button variant="contained" onClick={closeModel}>
              cancel
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDelete(row)}
            >
              OK
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Confirm);
