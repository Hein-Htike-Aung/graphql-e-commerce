const { productSearching } = require('../utils/product-search');

// Create resolver for Category in order to get its Products List

exports.Category = {
  products: (parent, args, { db }) => {
    let filterProducts = db.products.filter((p) => p.categoryId === parent.id);

    filterProducts = productSearching(args, filterProducts, db);

    return filterProducts;
  },
};
