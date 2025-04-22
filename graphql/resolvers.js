import axios from 'axios';

export const resolvers = {
  Todo: {
    user: async (todo) =>   (
        await axios.get(
          `https://jsonplaceholder.typicode.com/users/${todo.userId}`
        )
      ).data,
  },
  Query: {
    getTodos: async () =>
      (await axios.get('https://jsonplaceholder.typicode.com/todos'))
        .data,
    getAllUsers: async () =>
      (await axios.get('https://jsonplaceholder.typicode.com/users'))
        .data,
    getUser: async (parent, { id }) =>
      (
        await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
      ).data,
  },
};
