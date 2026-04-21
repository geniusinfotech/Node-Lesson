const productModel = require("../models/product.model");

module.exports.createProduct = async ({
  name,
  category,
  brand,
  price,
  discount,
  stock,
  image,
  sku,
  discription,
}) => {
  if (
    !name ||
    !category ||
    !brand ||
    !price ||
    !stock ||
    !image ||
    !sku ||
    !discription
  ) {
    throw new Error("All Filed are Required !!");
  }

  let product = await productModel.create({
    name,
    category,
    brand,
    price,
    discount,
    stock,
    image,
    sku,
    discription,
  });
};
