require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

const githubData = {
  "login": "shubhamChaurasia55",
  "id": 185331875,
  "node_id": "U_kgDOCwvwow",
  "avatar_url": "https://avatars.githubusercontent.com/u/185331875?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shubhamChaurasia55",
  "html_url": "https://github.com/shubhamChaurasia55",
  "followers_url": "https://api.github.com/users/shubhamChaurasia55/followers",
  "following_url": "https://api.github.com/users/shubhamChaurasia55/following{/other_user}",
  "gists_url": "https://api.github.com/users/shubhamChaurasia55/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shubhamChaurasia55/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shubhamChaurasia55/subscriptions",
  "organizations_url": "https://api.github.com/users/shubhamChaurasia55/orgs",
  "repos_url": "https://api.github.com/users/shubhamChaurasia55/repos",
  "events_url": "https://api.github.com/users/shubhamChaurasia55/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shubhamChaurasia55/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shubham Chaurasia",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2024-10-17T06:35:18Z",
  "updated_at": "2025-08-02T13:08:50Z"
}

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/twitter', (req, res) =>{
    res.send("shubham");
})

app.get('/login', (req, res) =>{
    res.send("<h1>Plese login</h1>");
})

app.get('/github', (req, res)=>{
    res.json(githubData);
})
 
app.listen(process.env.PORT , ()=>{
    console.log(`App listining on port ${process.env.PORT}`);
})
