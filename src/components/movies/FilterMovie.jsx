import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useMovies } from '../../context/MovieContextProvider';

export default function FilterMovie() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // fetchByParams('genre', event.target.value)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    // fetchByParams('genre', event.target.value);
    setAnchorEl(null);
  };

  const { fetchByParams } = useMovies()

  return (
    <div>
      <Button
      className='nav-btns'
        style={{color: '#878787'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Жанры
      </Button>
      <Menu
        // style={{color: 'black'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Все</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Драма</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Мультфильмы</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Биография</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Детектив</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Ужастик</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Комедия</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Фантастика</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Для Взрослых</MenuItem>
      </Menu>
    </div>
  );
}
