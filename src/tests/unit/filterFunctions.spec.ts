import filters from '../../utils/filterFunctions';
import Repositories from '../__mocks__/Repositories';

describe('Test Filter Functions', () => {
  it('should be able to filter by Search tokens', () => {
    const repositories = filters.search(
      Repositories as Repository[],
      'DavysonMelo/Proffy',
    );
    expect(repositories[0].id).toEqual(284795293);
  });

  it('should be able to filter by Star', () => {
    const repositories = filters.star(Repositories as Repository[], true);

    expect(repositories[0].id).toEqual(253555790);
  });
});
