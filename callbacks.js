console.log("before");
getUser (1,displayUser)  
const displayUser = (user) =>{
    getRepositories(user.githubUserName,displayRepos)
} 
const displayRepos = (repos) =>{
    getCommits(repo,displaycommits)
}
const displayCommits = (commits) => {
    console.log(commits)
}
const getUser = (id,callback)  => {
    setTimeout(() => {
        console.log("reading a user from database...");
        callback({id:id,githubUserName:"mosh"})
    },2000)
}
console.log("after");