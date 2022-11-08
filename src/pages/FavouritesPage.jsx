import React, { useEffect } from 'react';
import { useFav } from '../context/FavContextProvider';

// mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


const FavouritesPage = () => {
  const { getFav, fav, addMovieToFav, removeFav } = useFav();
  // const [navigate, setNavigate] = useNavigate()


  useEffect(() => {
    getFav()
    console.log(fav);
  }, []);


  return (
    <>
      {fav?.movies.map((elem) => (
      <Card key={elem.item.name} sx={{ maxWidth: 240, minWidth: 200, minHeight: 450, maxHeight: 450, color: 'orange', background: 'black', border: '3px solid orange', borderRadius: '20px', paddingTop: '3%' }} >
        <>
        <CardMedia
        component="img"
        style={{width: '50%', height: '60%', margin: 'auto', borderRadius: '10px'}}
        image={elem.item.image}
        alt="product picture" />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {elem.item.name}
        </Typography>
        <div  style={{fontSize: '20px', color: 'orange'}} variant="body2" color="text.secondary">
          {elem.item.description}
        </div>
      </CardContent>
        <Button
                onClick={() => addMovieToFav(elem.item)}
                // onClick={() => navigate('/movie')}
                sx={{ margin: "0px" }}
                size="small"
              >
                <BookmarkIcon fontSize="large" sx={{ color: "red" }} />
              </Button>
      </>
    </Card>
        ))}
    </>
  )
}

export default FavouritesPage