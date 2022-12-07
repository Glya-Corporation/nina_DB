const { Products } = require("../models");

class ProductsServices {
  static async getProducts(offset, limit) {
    try {
      const result = await Products.findAll({ offset, limit });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createAProduct(newProduct) {
    try {
      const result = await Products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, category) {
    try {
      const result = await Products.update({ category: category }, {
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Products.destroy({ where: { id } })
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;