const Query = {
 
  cards: async (parent, args, { cardModel }) => {
    const cards = await cardModel.find();
    return cards;
  },
};

export default Query;