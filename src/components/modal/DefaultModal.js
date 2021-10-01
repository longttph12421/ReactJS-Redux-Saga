import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { compose } from 'redux';

function DefaultModal(props) {
  const { classes, title, component, modal, closeModel } = props;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={closeModel}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.itemModal}>
          <div className={classes.header}>
            <span className={classes.titleModal}>{title}</span>
            <CloseIcon className={classes.icon} onClick={closeModel} />
          </div>
          {component}
        </div>
      </Modal>
    </div>
  );
}
DefaultModal.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  closeModel: PropTypes.func,
  modal: PropTypes.bool,
  component: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    modal: state.ui.openModal,
    title: state.ui.title,
    component: state.ui.component,
  };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(DefaultModal);
