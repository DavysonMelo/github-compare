const search = (array: Repository[], key: string): Repository[] => {
  return array.filter(item => {
    return item.full_name.toLowerCase().includes(key);
  });
};
const star = (array: Repository[], starred: boolean): Repository[] => {
  return array.filter(item => {
    return item.starred === starred;
  });
};
const filters = {
  search,
  star,
};

export default filters;
