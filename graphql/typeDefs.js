export const typeDefs = `
      type User {
        id: ID!,
        name: String!,
        username: String!,
        email: String!,
        phone: String!,
        todos: [Todo]!
      }

      type Todo {
      id: ID!,
      title: String!,
      completed: Boolean,
      user: User
    }

    type Query {
      getTodos: [Todo]
      getAllUsers: [User]
      getUser(id: ID!): User
    }
`;
