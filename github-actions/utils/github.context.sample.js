// one example of github context object
Context = {
  payload: {
    inputs: null,
    ref: "refs/heads/main",
    repository: {
      allow_forking: true,
      archive_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/{archive_format}{/ref}",
      archived: false,
      assignees_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/assignees{/user}",
      blobs_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/git/blobs{/sha}",
      branches_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/branches{/branch}",
      clone_url: "https://github.com/MarkWiltberger/githubaction-testsite.git",
      collaborators_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/collaborators{/collaborator}",
      comments_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/comments{/number}",
      commits_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/compare/{base}...{head}",
      contents_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/contents/{+path}",
      contributors_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/contributors",
      created_at: "2023-02-19T19:53:20Z",
      default_branch: "main",
      deployments_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/deployments",
      description:
        "private repository to test githubactions and learn how they work",
      disabled: false,
      downloads_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/downloads",
      events_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/events",
      fork: false,
      forks: 0,
      forks_count: 0,
      forks_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/forks",
      full_name: "MarkWiltberger/githubaction-testsite",
      git_commits_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/git/commits{/sha}",
      git_refs_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/MarkWiltberger/githubaction-testsite/git/tags{/sha}",
      git_url: "git://github.com/MarkWiltberger/githubaction-testsite.git",
      has_discussions: false,
      has_downloads: true,
      has_issues: true,
      events_url:
        "https://api.github.com/users/MarkWiltberger/events{/privacy}",
      followers_url: "https://api.github.com/users/MarkWiltberger/followers",
      following_url:
        "https://api.github.com/users/MarkWiltberger/following{/other_user}",
      gists_url: "https://api.github.com/users/MarkWiltberger/gists{/gist_id}",
      gravatar_id: "",
      html_url: "https://github.com/MarkWiltberger",
      id: 17149108,
      login: "MarkWiltberger",
      node_id: "MDQ6VXNlcjE3MTQ5MTA4",
      organizations_url: "https://api.github.com/users/MarkWiltberger/orgs",
      received_events_url:
        "https://api.github.com/users/MarkWiltberger/received_events",
      repos_url: "https://api.github.com/users/MarkWiltberger/repos",
      site_admin: false,
      starred_url:
        "https://api.github.com/users/MarkWiltberger/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MarkWiltberger/subscriptions",
      type: "User",
      url: "https://api.github.com/users/MarkWiltberger",
    },
    workflow: ".github/workflows/move-closed-issues-test.yaml",
  },
  eventName: "workflow_dispatch",
  sha: "b0504555a082e36dcc141e9425cf768f9018d643",
  ref: "refs/heads/main",
  workflow: "Move Closed Issues Test",
  action: "sort-closed-issues-test",
  actor: "MarkWiltberger",
  job: "move-closed-issue-test",
  runNumber: 1,
  runId: 8410153479,
  apiUrl: "https://api.github.com",
  serverUrl: "https://github.com",
  graphqlUrl: "https://api.github.com/graphql",
};
