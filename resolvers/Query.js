const { productSearching } = require('../utils/product-search');

exports.Query = {
  hello: () => {
    return 'Hello World';
  },
  numberOfAnimals: () => {
    return 33;
  },
  price: () => {
    return 34.34;
  },
  isCool: () => {
    return false;
  },
  fruits: () => {
    return ['Apple', 'Orange'];
  },
  products: (parent, args, { db }) => {
    let filterProducts = db.products;

    filterProducts = productSearching(args, filterProducts, db);
    return filterProducts;
  },
  product: (parent, args, { db }) => {
    return db.products.find((p) => p.id === args.id);
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, args, { db }) => {
    return db.categories.find((c) => c.id === args.id);
  },
  reviews: (parent, args, { db }) => {
    return db.reviews;
  },
  review: (parent, args, { db }) => {
    return db.reviews.find((r) => r.id === args.id);
  },
};
