// Scalar type String, Int, Float, Boolean
const { gql } = require('apollo-server');

// One typeDef One Resolver, each One type relates to each resolver

exports.typeDefs = gql`
  type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
    fruits: [String!]!
    products(filter: ProductsFilterInput): [Product]
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
    reviews: [Review]
    review(id: ID!): Review
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category
    addProduct(input: AddProductInput): Product
    addReview(input: AddReviewInput): Review
    updateCategory(id: ID!, input: UpdateCategoryInput): Category
    updateProduct(id: ID!, input: UpdateProductInput): Product
    updateReview(id: ID!, input: UpdateReviewInput): Review
    deleteCategory(id: ID!): Boolean
    deleteProduct(id: ID!): Boolean
    deleteReview(id: ID!): Boolean
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String
    quantity: Int!
    price: Float!
    onSale: Boolean
    category: Category
    reviews: [Review]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    product: Product
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }

  input AddProductInput {
    name: String!
    description: String!
    image: String
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input UpdateProductInput {
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    onSale: Boolean
    categoryId: ID
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID
  }

  input UpdateReviewInput {
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID
  }
`;
