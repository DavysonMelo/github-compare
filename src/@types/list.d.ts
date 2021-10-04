interface ListContext {
  listType: string;
  setListType(type: string): void;
  repositories: Repository[];
  filterAndSort: FilterAndSort;
  onChangeFilter(filter: Sort): void;
  setRepositories(repoitories: Repository[]): void;
  searchRepo(key: string): void;
}
interface FilterAndSort {
  repositories: Repository[];
  type: Sort;
}
interface License {
  name: string;
}

interface Repository {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  created_at: string;
  pushed_at: string;
  license: License | null;
  starred?: boolean;
  language: string;
}

type Sort = 'lastCommit' | 'forks' | 'stars' | 'age' | 'openIssues' | '';

type Filter = 'star' | 'search';
