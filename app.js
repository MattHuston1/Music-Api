let artistNameSubmitted = document.querySelector("#artistName")
let songNameSubmitted = document.querySelector("#songName")
var songForm = document.querySelector("#songForm")

let artistName = ""
let songName = ""

let origApi = "https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3"
let origVoiceApi = "https://audd.p.rapidapi.com/findLyrics/?q=adele%20hello"
let lyricsApi = `https://galvanize-cors.herokuapp.com/https://api.audd.io/findLyrics/?q=${artistName}%20${songName}`
let lyricsWordsApi = "https://api.audd.io/findLyrics/?q=I%27m%20waking%20up%20to%20ash%20and%20dust"


songForm.addEventListener("submit", songFormSubmit)

function songFormSubmit(event) {
  event.preventDefault()

  artistName = artistNameSubmitted.value
  songName = songNameSubmitted.value

  fetch(lyricsApi, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "audd.p.rapidapi.com",
      "x-rapidapi-key": "9486a8a6f8mshac9ab31bbfa1a58p1e1886jsn73bd4264373d"
    }
  })
    .then(response => response.json())
    .then(myJSON => {
      console.log(myJSON)
    })
    .catch(err => {
      console.log(err);
    });
}

  // Lyrics Recognition and search