// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Create relationships to execute associations
//Product belongs to Category  --> 1:1 relationship, foreign key beign defined in the targe B model.
Product.belongsTo(Category, {
  foreignKey: "category_id",
  constraints: false,
});

// Categories have many Products --> 1: Many
Category.hasMany(Product, {
  foreignKey: "category_id",
  constraints: false,
});

// Products belongToMany Tags (through ProductTag) --> Many : Many : using junction table, which will have foreign keys aId, bId (product, tag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

// Tags belongToMany Products (through ProductTag) Many : Many : through another
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: true,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
