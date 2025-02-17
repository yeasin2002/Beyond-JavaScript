import { describe, expect, it, vi } from 'vitest';
import { getContributors } from './get-contributors-list';

const mockContributors = [
  {
    login: 'yeasin2002',
    id: 87494463,
    node_id: 'MDQ6VXNlcjg3NDk0NDYz',
    avatar_url: 'https://avatars.githubusercontent.com/u/87494463?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/yeasin2002',
    html_url: 'https://github.com/yeasin2002',
    followers_url: 'https://api.github.com/users/yeasin2002/followers',
    following_url:
      'https://api.github.com/users/yeasin2002/following{/other_user}',
    gists_url: 'https://api.github.com/users/yeasin2002/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/yeasin2002/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/yeasin2002/subscriptions',
    organizations_url: 'https://api.github.com/users/yeasin2002/orgs',
    repos_url: 'https://api.github.com/users/yeasin2002/repos',
    events_url: 'https://api.github.com/users/yeasin2002/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/yeasin2002/received_events',
    type: 'User',
    site_admin: false,
    contributions: 151
  }
];

describe('getContributors', () => {
  it('should return an array of contributors when API call is successful', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers(),
        json: () => Promise.resolve(mockContributors)
      } as Response)
    );

    const contributors = await getContributors();
    expect(contributors).toEqual(mockContributors);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/yeasin2002/Stack-Unboxed/contributors',
      expect.any(Object)
    );
  });

  it('should return an empty array when API call fails', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve(new Response(null, { status: 500 }))
    );

    const contributors = await getContributors();
    expect(contributors).toEqual([]);
  });

  it('should return an empty array when fetch throws an error', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network Error')));

    const contributors = await getContributors();
    expect(contributors).toEqual([]);
  });
});
