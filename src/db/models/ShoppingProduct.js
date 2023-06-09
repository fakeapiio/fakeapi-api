const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line
    static associate(models) {
      // define association here
      ShoppingProduct.belongsTo(models.ShoppingCategory, {
        foreignKey: 'shoppingCategoryId',
        as: 'ShoppingCategory',
      });

      ShoppingProduct.belongsTo(models.ShoppingVendor, {
        foreignKey: 'shoppingVendorId',
        as: 'ShoppingVendor',
      });
    }
  }

  ShoppingProduct.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ShoppingProduct',
      tableName: 'shopping_products',
    }
  );
  return ShoppingProduct;
};
