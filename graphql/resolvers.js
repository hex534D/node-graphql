export const resolvers = {
  Query: {
    getTodos: async () =>
      (await axios.get('https://jsonplaceholder.typicode.com/todos'))
        .data,
  },
};
