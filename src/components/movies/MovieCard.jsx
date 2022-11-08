import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../context/MovieContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { useFav } from "../../context/FavContextProvider";

// mui imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MovieCard = ({ item}) => {
  const navigate = useNavigate();
  const { addMovieToFav } = useFav();

  const { deleteMovie } = useMovies();
//   const { user } = useAuth();

//   const movieImage =  item.images.map(i => console.log(i.image))
  return (
    <div
      id="productCard"
      style={{ margin: "1vw", zIndex: "2", position: "relative" }}
    >
      <article className="t">
        <header className="card__thumb">
          <a href="#">
            <img src={item.image} width="100%" />
          </a>
        </header>

        <div className="card__body">
          <h2 className="card__title" style={{ color: "white" }}>
            <div href="#">{item.title}</div>
          </h2>
          <p className="card__description">{item.description}</p>
        </div>

        <footer className="card__footer">
          <Button
            sx={{ margin: "0px" }}
            onClick={() => navigate(`/details/${item.id}/`)}
            size="small"
          >
            <InfoSharpIcon fontSize="large" sx={{ color: "black" }} />
          </Button>
          <Button
                onClick={() => addMovieToFav(item)}
                sx={{ margin: "0px" }}
                size="small"
              >
                <BookmarkIcon fontSize="large" sx={{ color: "black" }} />
              </Button>
          {/* {user.formData === true ? ( */}
            <>
              <Button
                sx={{ padding: "0px", margin: "0px" }}
                onClick={() => navigate(`/edit/${item.id}`)}
                size="small"
              >
                <ModeEditIcon fontSize="large" sx={{ color: "black" }} />
              </Button>
              <Button
                sx={{ padding: "0px", margin: "0px" }}
                onClick={() => deleteMovie(item.id)}
                size="small"
              >
                <DeleteIcon fontSize="large" sx={{ color: "black" }} />
              </Button>
              
            </>
          {/* ) : null} */}
        </footer>
      </article>
    </div>
  );
};

export default MovieCard;
