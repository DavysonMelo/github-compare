import sorts from '../../utils/sortFunctions';
import SORT from '../../consts/Sort';
import Repositories from '../__mocks__/Repositories';

describe('Testing sort functions', () => {
  it('Should be able to sort by star', () => {
    const sortFunction = sorts[SORT.STARS];
    const repositories = sortFunction(Repositories as Repository[]);
    expect(repositories[0].id).toEqual(307461761);
  });

  it('Should be able to sort by fork', () => {
    const sortFunction = sorts[SORT.FORKS];
    const repositories = sortFunction(Repositories as Repository[]);
    expect(repositories[0].id).toEqual(236543906);
  });

  it('Should be able to sort by age', () => {
    const sortFunction = sorts[SORT.AGE];
    const repositories = sortFunction(Repositories as Repository[]);
    expect(repositories[0].id).toEqual(156403906);
  });

  it('Should be able to sort by last commit', () => {
    const sortFunction = sorts[SORT.LAST_COMMIT];
    const repositories = sortFunction(Repositories as Repository[]);
    expect(repositories[0].id).toEqual(156403906);
  });

  it('Should be able to sort by Open Issues', () => {
    const sortFunction = sorts[SORT.OPEN_ISSUES];
    const repositories = sortFunction(Repositories as Repository[]);
    expect(repositories[0].id).toEqual(284795293);
  });
});
