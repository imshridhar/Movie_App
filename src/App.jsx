import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import mogambo from './MovieData'

export default class App extends Component {

  constructor() {
    super();
    //Creating the state object 
    this.state = {
      movies: mogambo,
      cartCount:0

    }
  }

  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5
    }

    this.setState({
      movies
    });
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies
    })

  }

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;
    if(movies[movieId].isInCart){
      this.state.cartCount+=1;
    }
    else{
      this.state.cartCount+=-1;
    }

    this.setState({
      movies
    })
  }
  render(){
    // console.log(this.props)
    return(
      <>
      <Navbar cartcount={this.state.cartCount}/>
      <MovieList
              movies = {this.state.movies}              
              onIncStars = {this.handleAddStars}
              onDecStars = {this.handleDecStars}
              onClickFav = {this.handleToggleFav}
              onClickAddtocart = {this.handleAddtocart} />
      </>

    )
  }
}