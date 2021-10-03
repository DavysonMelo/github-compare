interface ListContext {
  listType: string;
  setListType(type: string): void;
  repositories: Repository[];
  filterAndSort: FilterAndSort;
}
interface FilterAndSort {
  repositories: Repository[];
  type:
    | 'star'
    | 'last-commit'
    | 'forks'
    | 'stars'
    | 'age'
    | 'open-issues'
    | 'search'
    | '';
  searchKey: string;
}

interface Repository {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  created_at: string;
  pushed_at: string;
  license: ILicense | null;
  starred?: boolean;
  language: string;
}
