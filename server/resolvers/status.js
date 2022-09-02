const Status = {
  itemList: (parent, arg, { itemList }) => {
    return itemList.filter((item) => {
      return item.status_id === parent.status_id;
    });
  },
};
export default Status;
