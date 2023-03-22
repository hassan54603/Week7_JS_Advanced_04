
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ['duraanali', 'gabischool', 'clementmihailescu','freeCodeCamp','CleverProgrammer','Abdifatahz', 'kubowania', 'mchamoudadev', 'jamaaldev', 'developedbyed']
followersArray.forEach(items =>{
  axios.get(`https://api.github.com/users/${items}`)
  .then((response) => {
  console.log(response.data)
  const image = response.data.avatar_url;
  const name = response.data.name;
  const login = response.data.login;
  const location = response.data.location;
  const html_url = response.data.html_url;
  const followers = response.data.followers;
  const following = response.data.following;
  const bio = response.data.bio;
  const user = user1(image, name, login, location, html_url, followers, following,bio)
   
})
.catch (error => {
  console.log(error)
})
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector('.cards')
const user1 = (image, name , username, location, link, follow, followers, bio) =>{

  return cards.innerHTML += `
  <div class="card">
    <img src=${image} />
    <div class="card-info">
      <h3 class="name">${name}</h3>
      <p class="username">${username}</p>
      <p>Location: ${location}</p>
      <p>Profile: 
      <a href=${link}>${link}</a>
      </p>
      <p>Followers: ${followers}</p>
      <p>Following: ${follow}</p>
      <p>Bio: ${bio}</p>
      </div>
  </div> `
}



/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/



