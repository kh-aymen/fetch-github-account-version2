const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const userName = document.getElementById("userName").value
    document.getElementById("result").innerHTML = ''

    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    console.log(data)

    document.getElementById("result").innerHTML = `
    <div class="content-data-info" >
             <p><strong>Full Name: </strong>${data.name || 'Not available'}</p>
             <p><strong>User Name: </strong>${data.login}</p>
             <p><strong>Location: </strong>${data.location || 'Not available'}</p>
             <p><strong>Public Repositories: </strong>${data.public_repos}</p>
             <p><strong>Followers: </strong>${data.followers}</p>
             <p><strong>Following: </strong>${data.following}</p>
             <p>And you can go to the console to get more info...  
             <a href="https://github.com/${userName}" target='_blank'>
             <button class="btn" >Click To See Profile</button>      
             </a>
    </div>
    <div class="content-data-img">
             <a href="https://github.com/${userName}" target='_blank'>
             <img src=${data.avatar_url} alt="Image Not Found">
             </a>
    </div>
    `


})