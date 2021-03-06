// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Product, {
//   through: {ProductTag,
//     foreignKey: 'tag_id'
//     },
//   as: 'whatchamacallit'
// });


// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
//   as: 'products_with_tag'
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
