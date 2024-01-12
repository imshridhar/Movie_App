import React from "react";
import MovieCard from "./MovieCard";
import mogambo from './MovieData';


class MovieList extends React.Component{

    render(){
        // const {movies} =  this.state;
        // console.log(this.props)
        const {movies,onIncStars,onDecStars,onClickFav,onClickAddtocart}=this.props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           onIncStars = {onIncStars}
                            onDecStars = {onDecStars}
                            onClickFav = {onClickFav}
                            onClickAddtocart = {onClickAddtocart}/>

            ))}              
            </div>
        )
    }
}

export default MovieList;