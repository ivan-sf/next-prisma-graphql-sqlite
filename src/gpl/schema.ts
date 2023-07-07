import { gql } from 'apollo-server';

const typeDefs = gql`
type User {
  id: String
  name: String
  email: String
  password: String
  posts: [Post]
  comments: [Comment]
}

type Post {
  id: String
  title: String
  content: String
  publicationDate: String
  author: User
  tags: [Tag]
  comments: [Comment]
}

type Comment {
  id: String
  content: String
  creationDate: String
  author: User
  post: Post
}

type Tag {
  id: String
  name: String
  posts: [Post]
}

type Hora {
  pais: String
  hora_actual: String
}

type Query {
  users: [User]
  user(id: String!): User
  posts: [Post]
  post(id: String!): Post
  comments: [Comment]
  comment(id: String!): Comment
  tags: [Tag]
  tag(id: String!): Tag
  obtenerHora: [Hora]   
  generarDatosAleatorios: [Int!]!
  generarTokensAleatorios: [String!]!
}

type Mutation {
  createUser(name: String!, email: String!, password: String!): User
  updateUser(id: String!, name: String, email: String, password: String): User
  deleteUser(id: String!): User
  createPost(title: String!, content: String!, authorId: String!, tagIds: [String!]!): Post
  updatePost(id: String!, title: String, content: String): Post
  deletePost(id: String!): Post
  createComment(content: String!, authorId: String!, postId: String!): Comment
  updateComment(id: String!, content: String): Comment
  deleteComment(id: String!): Comment
  createTag(name: String!): Tag
  updateTag(id: String!, name: String): Tag
  deleteTag(id: String!): Tag
}

`;

export default typeDefs;