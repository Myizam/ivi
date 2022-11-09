import React, { useState } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import { useNavigate } from 'react-router-dom';


// mui imports 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields() {
  // const [value, setValue] = React.useState('Controlled');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };


  const { addMovie } = useMovies();
  const navigate = useNavigate();

  // const [movie, setMovie] = useState([])

  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState('');
  const [image, setImage] = useState('');
  const [director, setDirector] = useState('');
  const [dirImg, setDirImg] = useState('');
  // const [created_ad, setCreated_ad] = useState('');



  const buttonAdd = () => {
    if(!title.trim() || !description.trim() || !owner.trim() ){
      alert('Some inputs are empty!');
      return;
    };


    let formData = new FormData()
    formData.append('title', title)
    formData.append('owner', owner)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('video', video)
    formData.append('image', image)
    formData.append('director', director)
    formData.append('dirImg', dirImg)

    addMovie(formData);
    setOwner("")
    setTitle('');
    setDescription('');
    setCategory('');
    setVideo('');
    setImage('');
    navigate('/movies');
  }


  return (
    <main style={{display: 'flex', justifyContent: 'center'}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', marginTop: '5%', alignItems: 'center', background: 'grey', flexDirection: 'column', width: '40%', padding: '2%', borderRadius: '20px', opacity: '80%'
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Добавить</h2>
      <div style={{display: 'flex', margin: '3% 0'}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <TextField value={title}
          onChange={e => setTitle(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Название"
          placeholder="Название"
          multiline
          variant="standard"
        />
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
         <TextField value={description}
          onChange={e => setDescription(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Описание"
          placeholder="Описание"
          multiline
          variant="standard"
        />
        <TextField value={owner}
          onChange={e => setOwner(e.target.value)}
          color="error"
          id="standard-textarea"
          label="owner"
          placeholder="owner"
          multiline
          variant="standard"
        />
         <TextField value={category}
          onChange={e => setCategory(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Жанр"
          placeholder="Жанр"
          multiline
          variant="standard"
        />
        <input value={image}
        type="file"
          onChange={e => setImage(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Картина"
          placeholder="Картина"
          multiline
          variant="standard"
        />
        </Box>
        <TextField value={video}
          onChange={e => setVideo(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Продолжительность"
          placeholder="Продолжительность"
          multiline
          variant="standard"
        />
        <TextField value={director}
          onChange={e => setDirector(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Режжисер"
          placeholder="Режжисер"
          multiline
          variant="standard"
        />
        <TextField value={dirImg}
          onChange={e => setDirImg(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Картина Режжисера"
          placeholder="Картина Режжисера"
          multiline
          variant="standard"
        />
        </Box>
        </div>
       <Button onClick={buttonAdd} variant="contained" color='warning'>Добавить</Button>
    </Box>
    </main>
  );
}
