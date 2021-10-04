import SORT from '../consts/Sort';

const sortStars = (array: Repository[]): Repository[] => {
  return array.sort((a, b) => b.stargazers_count - a.stargazers_count);
};

const sortForks = (array: Repository[]): Repository[] => {
  return array.sort((a, b) => b.forks - a.forks);
};

const sortOpenIssues = (array: Repository[]): Repository[] => {
  return array.sort((a, b) => b.open_issues - a.open_issues);
};

const sortAge = (array: Repository[]): Repository[] => {
  return array.sort((a, b) => {
    const aDate = new Date(a.created_at);
    const bDate = new Date(b.created_at);
    return aDate.getTime() - bDate.getTime();
  });
};

const sortLastCommit = (array: Repository[]): Repository[] => {
  return array.sort((a, b) => {
    const aDate = new Date(a.pushed_at);
    const bDate = new Date(b.pushed_at);
    return aDate.getTime() - bDate.getTime();
  });
};

const sorts = {
  [SORT.STARS]: sortStars,
  [SORT.FORKS]: sortForks,
  [SORT.OPEN_ISSUES]: sortOpenIssues,
  [SORT.AGE]: sortAge,
  [SORT.LAST_COMMIT]: sortLastCommit,
  '': (array: Repository[]): Repository[] => array,
};

export default sorts;
