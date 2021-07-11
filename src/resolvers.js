const users = [
  {id: 1, name: 'Eric', email: 'eric@devgoogle.com'},
  {id: 2, name: 'Lopes', email: 'eric@devnubank.com'}
]

module.exports = {
  Query: {
    users: () => users,
    user: (_,{ id }) => users[id]
  },

  Mutation: {
    createUser: (_, { name, email }) => {
      const user = {name, email};
      users.push(user);
    }
  }
};