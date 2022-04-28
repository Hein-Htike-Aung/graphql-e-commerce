// Create resolver for Product in order to get its Category

exports.Product = {
  category: (parent, args, { db }) => {    
    return db.categories.find((c) => c.id === parent.categoryId);
  },
  reviews: (parent, args, { db }) => {
    return db.reviews.filter((r) => r.productId === parent.id);
  },
};
