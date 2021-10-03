import Api from '.';

export const getRepo = async (repo: string): Promise<Repository> => {
  const response = await Api.get(`repos/${repo}`);
  return response.data;
};

export const getUserRepos = async (user: string): Promise<Repository[]> => {
  const response = await Api.get<Repository[]>(`users/${user}/repos`);
  return response.data;
};
