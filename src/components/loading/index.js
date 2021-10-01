import { React, Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import loadingIcon from "../../assets/gif/load.gif";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

class Loading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <Box sx={{ display: "flex" }} className={classes.globalLoading}>
          <CircularProgress className={classes.icon}/>
        </Box>
        // <div className={classes.globalLoading}>
        //   <img src={loadingIcon} alt="loading" className={classes.icon} />
        // </div>
      );
    }
    return xhtml;
  }
}
Loading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
export default withStyles(styles)(connect(mapStateToProps, null)(Loading));
