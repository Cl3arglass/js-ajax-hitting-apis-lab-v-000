// your code here
function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `${commits
    .map(
      commit =>
        // '<li><strong>' +
        // commit.author.login +
        // '</strong> - ' +
        // commit.commit.message +
        // '</li>'
        '/' + commit.author.login + '/'
    )
    .join('')}`;
  document.getElementById('details').innerHTML = commitsList;
}
