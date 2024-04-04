import React, { useEffect, useState } from 'react'
import "./style.css"
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Home() {



const [movies, setMovies] = useState([])
const [movieId, setMovieId] = useState("")

  

useEffect(() => {

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=ae464cfc3e9919890a9d62c6d5d1cf87")
  .then((res) => res.json())
  .then((res) => setMovies(res.results))
  .catch((err) => console.log(err))


}, [])

// function handleClick(title){
//   movieTrailer(title)
//   .then((res) => console.log(res))
// }

function handleClick(title){
  movieTrailer(title)
  .then((res) => {
    let vidId = res.split("=")[1]

    setMovieId(vidId)

  })
}
const opt = {
  playerVars: {
    autoplay: 1,
  },
}



  return (
    <div className=''>

      <div className="banner">
        <div><h4>Power</h4>

          <div>
            <button>Watch Now</button>
            <button>Save for later</button>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laborum!
          </p>

        </div>
      </div>

      <main className='bg-dark p-5'>
        <div className="container">

          <h5 className="text-white mb-5">Trending</h5>

          <div className="movieposter d-flex">

           
              {
                movies.map(each =>
                (
                  <img onClick={() => handleClick(each.original_title)} src={"https://image.tmdb.org/t/p/w500/" + each.poster_path} alt="poster img" />
                ))
              }
              
           

          </div>

          <div className="player">


            <YouTube
             videoId={movieId}
             opts={opt}
             />



          </div>
        </div>
      </main>

    </div>
  )


}

export default Home 