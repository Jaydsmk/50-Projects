// console.dir(axios);

const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// getUser("jaydsmk");

async function getUser(username) {
  //   axios(APIURL + username)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  //   const res = await axios(APIURL + username);
  //   console.log(res);
  try {
    const { data } = await axios(APIURL + username);

    createErrCard("No profile with this username");

    console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    // console.log(err);

    if (err.response.status == 404) {
      createErrCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    // console.log(err);
    createErrCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `
            <div class="card">
            <div>
                <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
            </div>
            <div class="user-info">
                <h2>${user.name == null ? user.login : user.name}</h2>
                <p>${user.bio == null ? "" : user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">

                </div>
            </div>
        </div>
        `;
  main.innerHTML = cardHTML;
}

function createErrCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
