import React, {createContext, useContext, useReducer, useState} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export const movieContext = createContext();
export const useMovies = () => useContext(movieContext);

const MOVIE_API = 'http://34.125.127.248/api/v1/posts/posts/'

const INIT_STATE = {
  movies: [],
  movieDetails: [], 
  searchmovie: []
};

const reducer = (state=INIT_STATE, action) => {
  switch(action.type){
    case 'GET_MOVIES':
      return {...state, movies: action.payload}
    case 'GET_MOVIE_DETAILS':
        return {...state, movieDetails: action.payload}
    case "GET_MOVIE_SEARCH":
      return {...state, searchmovie: action.payload}
     default:
          return state;
        };
      };
      
      const MovieContextProvider = ({ children }) => {
  const [error,setError] = useState()
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const navigate = useNavigate();
    const location = useLocation();

      //get all movies
  const getMovies = async () => {
    const { data } = await axios(`${MOVIE_API}`);
        // console.log(data);
      dispatch({
            type: 'GET_MOVIES',
            payload: data
        })
    }

    const getMovieSearch = async () => {
      const { data } = await axios(`${MOVIE_API}${window.location.search}`);
          console.log(data);
        dispatch({
              type: 'GET_MOVIE_SEARCH',
              payload: data
          })
      }
     //add
     const addMovie = async (formData) => {
      try{
        const token = JSON.parse(localStorage.getItem("token"))
        const Authorization = `Bearer ${token.access}`
        const config = {
          headers: {
            Authorization,
          },
        }
     const res = await axios.post(MOVIE_API, formData, config);
        // getMovies();
        console.log(res);
      } catch (error){
        console.log(error);
      }
  };

  //delete
 
  const deleteMovie = async (id)=> {

    try {
      const token = JSON.parse(localStorage.getItem("token"))
        const Authorization = `Bearer ${token.access}`
        const config = {
          headers: {
            Authorization,
          },
        }
    const res = await axios.delete(`${MOVIE_API}${id}/`, config);
    console.log(res)
    } catch (error) {
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
    }
  }

  // const obj = null;
  // const res = data.map((item)=>{
  //   item.images.map((item2)=>{
  //      obj = {
  //       item: item,
  //       item2: item2
  //     }
  //   })
  // })
  // const res = await axios(`${MOVIE_API}/${id}`);
  //update/details
  const getMovieDetails = async (id) => {
    const  {data} = await axios(`${MOVIE_API}${id}/`);
    console.log(data)
    dispatch({
        type: 'GET_MOVIE_DETAILS',
        payload: data
    });
  };

  const saveEditedMovie = async (newProduct) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))
        const Authorization = `Bearer ${token.access}`
        const config = {
          headers: {
            Authorization,
          },
        }
      
      await axios.patch(`${MOVIE_API}${newProduct.id}/`, newProduct, config);
    } catch (error) {
      console.log(error)
    }
    // getMovies();
  }

  // for filter 

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);
    // console.log(search);

    if(value === 'All'){
        search.delete(query)
    }else{
        search.set(query, value)
    };

    // console.log(value);

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
}

async function postComment(formData, id) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    const res = await axios.post(`${MOVIE_API}doctor/comments/`, formData, config);
    console.log(res);
    dispatch({
      type: "GET_COMMENT",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    console.log([error.response.data.detail]);
  }
}
async function editComment(formData, id) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    const res = await axios.patch(
      `${MOVIE_API}doctor/comments/${id}`,
      formData,
      config
    );
    console.log(res);
  } catch (error) {
    console.log(error);
    console.log([error.response.data.detail]);
  }
}
async function deleteComment(id) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    const res = await axios.delete(`${MOVIE_API}doctor/comments/${id}`, config);
    console.log(res);
  } catch (error) {
    console.log(error);
    console.log([error.response.data.detail]);
  }
}








const values = {
  addMovie,
  getMovies,
  deleteMovie,
  getMovieDetails,
  saveEditedMovie,
  fetchByParams,
  setError,
  postComment,
  deleteComment,
  editComment,
  getMovieSearch,

  error,
  searchmovie: state.searchmovie,
  movies: state.movies,
  movieDetails: state.movieDetails,
  oneComment: state.oneComment,
};
  return (
    <movieContext.Provider value={values}>
        { children }
    </movieContext.Provider>
  )
}

export default MovieContextProvider