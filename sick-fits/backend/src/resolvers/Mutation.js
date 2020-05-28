const Mutations = {
  createItem(parent, args, ctx, info) {
    // TODO: Check if they're logged in
    const item = ctx.db.mutation.createItem(
      {
        data: {
          // title: args.title,
          // description: args.desc
          ...args,
        },
      },
      info
    );

    return item;
  },
};

module.exports = Mutations;
