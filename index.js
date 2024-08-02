const container = document.getElementById("container")
const hamster = document.getElementById("hamster")
const userInfo = document.getElementById("user-info")
const fetchError = document.getElementById("fetch-error")
const handle = document.getElementById("handle")
const rank = document.getElementById("rank")
const rating = document.getElementById("rating")
const maxRank = document.getElementById("max-rank")
const maxRating = document.getElementById("max-rating")
const friendOfCount = document.getElementById("friend-of-count")
const avatar = document.getElementById("avatar")

document.getElementById("username").addEventListener("keyup", function(e) {
    if (e.key != "Enter")
        return
    container.style.height = "400px"
    userInfo.style.display = "none"
    avatar.src = ""
    hamster.style.display = "block"
    const username = document.getElementById("username").value
    fetch(`https://codeforces.com/api/user.info?handles=${username}`)
    .then(response => response.json())
    .then(data => {
        hamster.style.display = "none"
        if (data.status === "OK") {
            userInfo.style.display = "block"
            fetchError.style.display = "none"
            const user = data.result[0];
            handle.innerHTML = user.handle
            rank.innerHTML = user.rank
            rating.innerHTML = user.rating
            maxRank.innerHTML = user.maxRank
            maxRating.innerHTML = user.maxRating
            friendOfCount.innerHTML = user.friendOfCount
            avatar.src = user.avatar
        } else {
            container.style.height = "250px"
            fetchError.style.display = "block"
        }
    })
    .catch(error => {
        document.getElementById("user-info").innerHTML = "<div class='info'>Error fetching data.</div>"
        console.error("Error:", error);
    })
})