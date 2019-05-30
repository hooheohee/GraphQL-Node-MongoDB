import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find(),
    cat: (_, {name}) => {
      return Cat.find({ name }).exec().then((res)=>{
        return res;
      });
    }
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    deleteCat: (_, { name }) => {
      var p = Cat.find({ name }).exec();
      Cat.deleteMany({ name }).exec();
      return p.then((res)=>{
        return res;
      })
    },
    updateCat: (_, { name, newName }) => {
      Cat.updateMany(
        { "name": name },
        { $set: { "name": newName } }
      ).exec();
      return Cat.find({name}).exec().then((res)=>{
        return res;
      });
    }
  }
};
