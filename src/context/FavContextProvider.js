import React, { useContext, useState } from "react";

const favContext = React.createContext();
export const useFav = () => useContext(favContext);


const FavContextProvider= ({ children }) => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")));

    const getFav = () => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if(!fav){
        localStorage.setItem("fav", JSON.stringify({movies: []}));
        }


        setFav(fav);
    }


    const addMovieToFav = (movie) => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if(!fav){
            fav = {
                movies: []
            }
        };

        let newMovie = {
            item: movie
        }

        let movieToFind = fav.movies.filter(
            (elem) => elem.item.id === movie.id
        );

        if(movieToFind.length === 0){
            fav.movies.push(newMovie);
        }else{
            fav.movies = fav.movies.filter(
                (elem) => elem.item.id !== movie.id
            );
        };

        localStorage.setItem("fav", JSON.stringify(fav));

        console.log('clicked', fav);

        setFav(fav)
    }

    function removeFav(id){
        let todos = JSON.parse(localStorage.getItem('fav'))
        let newTodos = todos.splice(id, 1)
        localStorage.setItem('fav', JSON.stringify(newTodos))
    }
    const values = {
        fav,

        getFav,
        addMovieToFav,
        removeFav
    }


    return (
        <favContext.Provider value={values}>
            { children }
        </favContext.Provider>
    )
}

export default FavContextProvider