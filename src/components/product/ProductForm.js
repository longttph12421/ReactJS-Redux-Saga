import React, { Component } from 'react';
//------------------------------------------------------
//  MATERIAL - UI
//------------------------------------------------------
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------
import styles from '../../containers/product/styles';
import constants from '../../configures/constants';
import renderTextField from '../FormHelper/TextField/index';
import DateTime from '../FormHelper/dateTime/DateTime';
import Select from '../../components/FormHelper/Select/index';
import validate from '../FormHelper/validate/Validate';
import * as ProductAction from '../../store/actions/ProductAction';
import * as ModalAction from '../../store/actions/UI';
//------------------------------------------------------

class ProductForm extends Component {
  submitForm = (data) => {
    const { ProductActionCreators } = this.props;
    const { updateProduct, addProduct } = ProductActionCreators;
    if (data && data.id) {
      updateProduct(data);
    } else {
      addProduct(data);
    }
  };
  render() {
    const {
      classes,
      handleSubmit,
      invalid,
      submitting,
      ModalActionCreators,
      CategoryList,
    } = this.props;
    const { closeModel } = ModalActionCreators;
    return (
      <div>
        {' '}
        <form onSubmit={handleSubmit(this.submitForm)} className={classes.root}>
          <Grid container spacing={2}>
            <Field
              id="id"
              type="hidden"
              className={classes.TextField}
              margin="normal"
              name="id"
              component={renderTextField}
            />

            <Grid item xs={12} md={6}>
              <Field
                id="name"
                label="Name"
                className={classes.TextField}
                margin="normal"
                name="name"
                component={renderTextField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                type="number"
                id="price"
                label="Price"
                className={classes.TextField}
                margin="normal"
                name="price"
                component={renderTextField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                id="CreateDate"
                label="Create date"
                className={classes.TextField}
                margin="normal"
                name="createDate"
                component={DateTime}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                type="number"
                id="quantity"
                label="Quantity"
                className={classes.TextField}
                margin="normal"
                name="quantity"
                component={renderTextField}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Field
                type="select"
                id="category"
                label="Category"
                className={classes.TextField}
                margin="normal"
                children={CategoryList}
                name="categoryId"
                component={Select}
              />
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" flexDirection="row-reverse" mt={2}>
                <Box ml={1}>
                  <Button variant="contained" onClick={closeModel}>
                    Cancel
                  </Button>
                </Box>
                <Button
                  disabled={invalid || submitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

ProductForm.propTypes = {
  classes: PropTypes.object,
  initialValues: PropTypes.object,
  ProductActionCreators: PropTypes.shape({
    addProduct: PropTypes.func,
    updateProduct: PropTypes.func,
  }),
  submitForm: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    initialValues: state.product.EditData,
    CategoryList: state.category.CategoryList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ProductActionCreators: bindActionCreators(ProductAction, dispatch),
    ModalActionCreators: bindActionCreators(ModalAction, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({
  form: constants.REDUX_FORM.FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(ProductForm);
