const Query = {
  itemList: (parent, arg, { itemList }) => itemList,
  item: (parent, arg, { itemList }) => {
    let item = itemList.find((item) => {
      return item.id === arg.id;
    });
    return item;
  },
  categories: (parent, arg, categories) => categories,
  category: (parent, arg) => {
    let category = categories.find((category) => {
      return category.category_id === arg.category_id;
    });
    return category;
  },
  status: (parent, arg, { status }) => status,
  statu: (parent, arg, { status }) => {
    let statu = status.find((statu) => {
      return statu.status_id === arg.status_id;
    });
    return statu;
  },
};
export default Query;
