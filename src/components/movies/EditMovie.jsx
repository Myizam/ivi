import React, { useState, useEffect } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

// mui imports 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const EditMovie = () => {

  const { getMovieDetails, movieDetails, saveEditedMovie } = useMovies();
  

  const [movie, setMovie] = useState(movieDetails)

  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(()=>{
    getMovieDetails(id)
  },[])

  useEffect(()=>{
    setMovie(movieDetails);
  },[movieDetails])


console.log(movieDetails);

const handleInp = e => {
      let obj = {
          ...movie,
          [e.target.name]: e.target.value
      };
      setMovie(obj)
}

  return (
    <>
    {movie ? (
    <main style={{display: 'flex', justifyContent: 'center'}}>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', marginTop: '1%', alignItems: 'center', background: 'grey', flexDirection: 'column', padding: '1%', width: '40%', borderRadius: '20px', opacity: '80%'
    }}
    noValidate
    autoComplete="off"
  >
    <h2>Edit movie</h2>
    <div style={{display: 'flex', margin: '1% 0', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <TextField 
          color="error"
        name='title' 
        value={movie.title}
        onChange={handleInp}
        id="standard-textarea"
        label="Названия"
        placeholder="Названия "
        multiline
        variant="standard"
      />
       <TextField 
          color="error"
        name='owner'
        value={movie.owner}
        onChange={handleInp}
        id="standard-textarea"
        label="Владелец"
        placeholder="Владелец"
        multiline
        variant="standard"
      />
      <TextField 
          color="error"
          name='description'
          value={movie.description}
          onChange={handleInp}
          id="standard-textarea"
          label="Описания"
          placeholder="Описания"
          multiline
          variant="standard"
        />
      <TextField 
          color="error"
        name='category' 
        value={movie.category}
        onChange={handleInp}
        id="standard-textarea"
        label="Категория"
        placeholder="Категория"
        multiline
        variant="standard"
      />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
       <TextField 
          color="error"
        name='video'
        value={movie.video}
        onChange={handleInp}
        id="standard-textarea"
        label="Видео"
        placeholder="Видео"
        multiline
        variant="standard"
      />
      <TextField 
          color="error"
          name='image' 
          value={movie.image}
          onChange={handleInp}
          id="standard-textarea"
          label="Картина"
          placeholder="Картина"
          multiline
          variant="standard"
        />
       <TextField 
          color="error"
          name='director' 
          value={movie.director}
          onChange={handleInp}
          id="standard-textarea"
          label="Режисер"
          placeholder="Режисер"
          multiline
          variant="standard"
        />
      <TextField 
          color="error"
          name='dirImg' 
          value={movie.dirImg}
          onChange={handleInp}
          id="standard-textarea"
          label="Картина Режисер"
          placeholder="Картина Режисер"
          multiline
          variant="standard"
        />
        </Box>
        </div>
     <Button onClick={() => {
      saveEditedMovie(movie)
      navigate('/movies')
     }} variant="contained" color='warning'>Edit</Button>
  </Box>
  </main>
  ) : (<h3>loading</h3>)}
  </>
  )
}

export default EditMovie