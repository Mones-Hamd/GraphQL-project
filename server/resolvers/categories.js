const Categories = {
  itemList: (parent, arg, itemList) => {
    return itemList.filter((item) => {
      return item.category_id === parent.category_id;
    });
  },
};
export default Categories;
