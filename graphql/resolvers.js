import axios from 'axios';

export const resolvers = {
  Todo: {
    user: async (todo) =>   (
        await axios.get(
          `https://jsonplaceholder.typicode.com/users/${todo.userId}`
        )
      ).data,
  },
  User: {
    todos: async (user) => {
      const userTodos = (
        await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        )
      ).data;

      return userTodos.filter(todo => todo.userId === user.id);
    }
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
