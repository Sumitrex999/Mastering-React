import Movie from "./components/Movie";

const App = () => {
  const movies = [
    {id:1, title:"Inception", year:2010},
    {id:2, title:"Interstellar", year:2014},
    {id:3, title:"The Dark Knight", year:2008},
  ]
  return (
    <div>
      {movies.map((movie)=>(
        <Movie key={movie.id}>
          <h1>{movie.title}-{movie.year}</h1>
        </Movie>
      ))}
    </div>
  )
}

export default App
