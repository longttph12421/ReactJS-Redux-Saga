//------------------------------------------------------
//  REACT
//------------------------------------------------------
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//------------------------------------------------------
//  MATERIAL - UI
//------------------------------------------------------
import {
  Box,
  Button,
  TextField,
  withStyles,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------
import * as ProductAction from '../../store/actions/ProductAction';
import TableProduct from '../../components/product/TableProduct';
import DefaultModal from '../../components/modal/DefaultModal';
import * as modalAction from '../../store/actions/UI';
import ProductForm from '../../components/product/ProductForm';
import Confirm from '../../components/modal/Confirm';
//------------------------------------------------------

class ProductBox extends React.Component {
  componentDidMount() {
    const { ProductActionCreators, CategoryList } = this.props;
    const { getListProduct } = ProductActionCreators;
    getListProduct(CategoryList.indexOf(0));
  }
  handleSearch = (e) => {
    const { ProductActionCreators } = this.props;
    const { searchProduct } = ProductActionCreators;
    const { value } = e.target;
    searchProduct(value);
  };
  handleFilter = (event, index, value) => {
    const { ProductActionCreators } = this.props;
    const { getListProduct } = ProductActionCreators;
    getListProduct(value);
  };
  openCreateModal = () => {
    const { ProductActionCreators, ModalActionCreators } = this.props;
    const { setEditData } = ProductActionCreators;
    const { openModal, changeModalTitle, changeModalContent } =
      ModalActionCreators;
    setEditData(null);
    openModal();
    changeModalTitle('ADD NEW');
    changeModalContent(<ProductForm />);
  };
  openUpdateModal = (row) => {
    const { ProductActionCreators, ModalActionCreators } = this.props;
    const { setEditData } = ProductActionCreators;
    const { openModal, changeModalTitle, changeModalContent } =
      ModalActionCreators;
    setEditData(row);
    openModal();
    changeModalTitle('UPDATE');
    changeModalContent(<ProductForm />);
  };
  handleDelete = (row) => {
    const { ProductActionCreators } = this.props;
    const { deleteProduct } = ProductActionCreators;
    deleteProduct(row);
  };
  openDeleteModal = (row) => {
    const { ModalActionCreators } = this.props;
    const { openModal, closeModel, changeModalTitle, changeModalContent } =
      ModalActionCreators;
    openModal();
    changeModalTitle('DELETE');
    changeModalContent(
      <Confirm
        row={row}
        closeModel={closeModel}
        handleDelete={this.handleDelete}
      />,
    );
  };
  closeModal = () => {
    const { ModalActionCreators } = this.props;
    const { closeModel } = ModalActionCreators;
    closeModel();
  };

  render() {
    const { classes, ProductList, modal, CategoryList } = this.props;
    return (
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <Box mt={3} mb={3}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<AddCircleIcon />}
              onClick={this.openCreateModal}
            >
              Add Product
            </Button>

            <form noValidate autoComplete="off">
              <Tooltip title="Search" aria-label="Search">
                <TextField
                  className={classes.SearchField}
                  onChange={this.handleSearch}
                  autoComplete="off"
                  margin="normal"
                  placeholder="Enter keywords"
                />
              </Tooltip>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <TableProduct
              classes={classes}
              CategoryList={CategoryList}
              ProductList={ProductList}
              handleFilter={this.handleFilter}
              openUpdateModal={this.openUpdateModal}
              openDeleteModal={this.openDeleteModal}
            />
          </TableContainer>
        </Grid>
        <DefaultModal
          classes={classes}
          modal={modal}
          closeModel={this.closeModal}
          editValue={this.editValue}
        />
      </Grid>
    );
  }
}
ProductBox.propTypes = {
  classes: PropTypes.object,
  ProductActionCreators: PropTypes.shape({
    getListProduct: PropTypes.func,
    openCreateModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
    closeModel: PropTypes.func,
    deleteProduct: PropTypes.func,
  }),
  editValue: PropTypes.func,
  handleDelete: PropTypes.func,
  ProductList: PropTypes.array,
  CategoryList: PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    CategoryList: state.category.CategoryList,
    ProductList: state.product.ProductList,
    modal: state.ui.openModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ProductActionCreators: bindActionCreators(ProductAction, dispatch),
    ModalActionCreators: bindActionCreators(modalAction, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ProductBox),
);
