export const issue = {
  selectedIssue: {
    assignees: [],
    body:
      "Currently, the expected way to handle an unknown at compile time number of labels is to put them each in their own component. However, when creating tables, this causes a mess of callbacks, as the only way to do it (that I can think of anyway) is to pass a callback into the table header components, have them create their own unique identifier, and then use a useEffect to give the parent those identifiers, have the parent pass those identifiers to the rows, and then have each row generate its opaque own unique identifiers and pass both to the cells. Note that this doesn't work currently because of these two bugs",
    comments: 2,
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/20822/comments',
    created_at: '2021-02-14T13:24:40Z',
    html_url: 'https://github.com/facebook/react/issues/20822',
    id: 807960484,
    labels: [
      {
        color: 'd4c5f9',
        default: false,
        description: "A potential issue that we haven't yet confirmed as a bug",
        id: 155984160,
        name: 'Status: Unconfirmed',
        node_id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
        url:
          'https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed',
      },
    ],
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/20822/labels{/name}',
    number: 20822,
    repository_url: 'https://api.github.com/repos/facebook/react',
    state: 'open',
    title:
      'Feat: Some type of way to merge key prop and useOpaqueIdentifier result ',
    updated_at: '2021-02-19T14:50:38Z',
    url: 'https://api.github.com/repos/facebook/react/issues/20822',
    user: {
      avatar_url: 'https://avatars.githubusercontent.com/u/20920091?v=4',
      events_url: 'https://api.github.com/users/SoAsEr/events{/privacy}',
      followers_url: 'https://api.github.com/users/SoAsEr/followers',
      following_url:
        'https://api.github.com/users/SoAsEr/following{/other_user}',
      html_url: 'https://github.com/SoAsEr',
      id: 20920091,
      login: 'SoAsEr',
      repos_url: 'https://api.github.com/users/SoAsEr/repos',
      site_admin: false,
      type: 'User',
      url: 'https://api.github.com/users/SoAsEr',
    },
  },
}
