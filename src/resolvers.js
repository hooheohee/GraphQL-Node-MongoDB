import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    deleteCat: (_, { name }) => {
      const res = Cat.find({ name }).countDocuments().exec();
      const kitty = Cat.deleteMany({ name }).exec();
      return res;
    }
  }
};
