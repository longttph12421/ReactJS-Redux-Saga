const Validate = (values) => {
  const errors = {};
  const { name, price, quantity, createDate, categoryId } = values;
  if (!name) {
    errors.name = 'Please enter name of product ';
  } else if (name.trim() && name.length < 5) {
    errors.name = 'Name must be at least 5 characters ...';
  }
  if (!price) {
    errors.price = 'Please enter price of product!';
  } else if (price < 0) {
    errors.price = 'The price of product must be greater than 0!';
  }
  if (!quantity) {
    errors.quantity = 'Please enter quantity of product!';
  } else if (quantity < 0) {
    errors.quantity = 'The quantity of product must be greater than 0!';
  }
  if (!createDate) {
    errors.createDate = 'Please change create date of product!';
  }
  if (!categoryId) {
    errors.categoryId = 'Please change category of product!';
  }
  return errors;
};

export default Validate;
