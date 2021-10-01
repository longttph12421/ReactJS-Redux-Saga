//------------------------------------------------------
//  REACT
//------------------------------------------------------
import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------
import styles from './styles';
import * as CategoryAction from '../../store/actions/CategoryAction';

class CategoryBox extends React.Component {
  componentDidMount() {
    const { CategoryActionCreators } = this.props;
    const { getListCategory } = CategoryActionCreators;
    getListCategory();
  }

  render() {
    const { classes, CategoryList } = this.props;
    return <div></div>;
  }
}
CategoryBox.propTypes = {
  classes: PropTypes.object,
  ProductActionCreators: PropTypes.shape({
    getCategory: PropTypes.func,
  }),
  editValue: PropTypes.func,
  CategoryList: PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    CategoryList: state.category.CategoryList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CategoryActionCreators: bindActionCreators(CategoryAction, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CategoryBox),
);
