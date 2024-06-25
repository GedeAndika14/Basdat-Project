{
  _id: "$account_id",
  totalLimit: {
    $sum: "$limit"
  },
  products: {
    $push: "$products"
  },
  uniqueProducts: {
    $addToSet: "$products"
  }
}
