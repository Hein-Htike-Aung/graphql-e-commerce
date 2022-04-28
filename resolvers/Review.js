exports.Review = {
  product: (parent, args, { db }) => {
    return db.products.find((p) => p.id === parent.productId);
  },
};
