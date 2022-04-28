const { v4: uuid } = require('uuid');

exports.Mutation = {
  addCategory: (parent, args, { db }) => {
    const newCategory = {
      id: uuid(),
      name: args.input.name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, args, { db }) => {
    const newProduct = {
      id: uuid(),
      name: args.input.name,
      description: args.input.description,
      image: args.input.image,
      quantity: args.input.quantity,
      price: args.input.price,
      onSale: args.input.onSale,
      categoryId: args.input.categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },

  addReview: (parent, args, { db }) => {
    const newReview = {
      id: uuid(),
      date: args.input.date,
      title: args.input.title,
      comment: args.input.comment,
      rating: args.input.rating,
      productId: args.input.productId,
    };
    db.reviews.push(newReview);
    return newReview;
  },

  updateCategory: (parent, { id, input }, { db }) => {
    let updateCategory = db.categories.find((c) => c.id === id);
    updateCategory = {
      id: updateCategory.id,
      name: input.name,
    };
    db.categories = db.categories.filter((c) => c.id !== id);
    db.categories.push(updateCategory);
    return updateCategory;
  },

  updateProduct: (parent, { id, input }, { db }) => {
    let updateProduct = db.products.find((p) => p.id === id);
    updateProduct = {
      id: updateProduct.id,
      name: input.name,
      description: input.description,
      image: input.image,
      quantity: input.quantity,
      price: input.price,
      onSale: input.onSale,
      categoryId: input.categoryId,
    };
    db.products = db.products.filter((p) => p.id !== id);
    db.products.push(updateProduct);
    return updateProduct;
  },

  updateReview: (parent, { id, input }, { db }) => {
    let updateReview = db.reviews.find((r) => r.id === id);
    updateReview = {
      id: updateReview.id,
      date: input.date,
      title: input.title,
      comment: input.comment,
      rating: input.rating,
      productId: input.productId,
    };
    reviews = db.reviews.filter((r) => r.id !== id);
    db.reviews.push(updateReview);
    return updateReview;
  },

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((c) => c.id !== id);

    db.products
      .filter((p) => p.categoryId === id)
      .map((p) => (p.categoryId = null));

    return true;
  },

  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((p) => p.id !== id);

    db.reviews
      .filter((r) => r.productId === id)
      .map((r) => (r.productId = null));

    return true;
  },

  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((r) => r.id !== id);
    return true;
  },
};
