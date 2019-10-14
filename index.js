document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = event.target['name-input'].value
    if(username === "") return;
    const newJokeLi = document.createElement("li")
    fetchJoke().then(joke => {
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  })
  })
})
