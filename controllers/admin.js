const getAddProducts = (req, res, next) => {
  res.render('./product/add-product', {pageTitle: 'Add Product page'});
};

module.exports = { getAddProducts };
