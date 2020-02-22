import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find(),
    cat: async (_, { name }) => {
      const res = await Cat.find({ name })
        .exec()
        .catch(e => console.log(e));
      return res;
    }
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    deleteCat: (_, { name }) => {
      return Cat.deleteMany({ name })
        .exec()
        .then(res => {
          return res.deletedCount + " record(s) deleted.";
        })
        .catch(e => console.log(e));
    },
    updateCat: (_, { name, newName }) => {
      return Cat.updateMany({ name: name }, { $set: { name: newName } })
        .exec()
        .then(e => {
          return e.nModified + " record(s) modified.";
        })
        .catch(e => console.log(e));
    }
  }
};
