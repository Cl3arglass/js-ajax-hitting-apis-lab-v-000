// your code here
function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.commit.author.name +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}

function displayBranches() {
  const branches = JSON.parse(this.responseText);
  const branchesList = `<ul>${branches
    .map(
      branch =>
        '<li><strong>' +
        branch.name +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = branchesList;
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  const reposList = `<ul>${repos
    .map(
      repo =>
        '<li><strong>' +
        repo.name +
        repo.owner.login +
        repo.html_url +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = reposList;
}
