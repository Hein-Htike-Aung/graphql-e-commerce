exports.productSearching = (args, filterProducts, db) => {
  if (Object.keys(args).length !== 0) {
    const { onSale, avgRating } = args.filter;

    // On Sale filter
    if (onSale === true) {
      filterProducts = filterProducts.filter((p) => p.onSale);
    }
    // Rating Filter
    if ([1, 2, 3, 4, 5].includes(avgRating)) {
      return filterProducts.filter((p) => {
        numberOfRiviews = 0;
        sumRating = 0;
        db.reviews.forEach((r) => {
          if (r.productId === p.id) {
            sumRating += r.rating;
            numberOfRiviews++;
          }
        });

        return Math.round(sumRating / numberOfRiviews) >= avgRating;
      });
    }
  }
  return db.products;
};
