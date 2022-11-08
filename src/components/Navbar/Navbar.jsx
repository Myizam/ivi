import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useSearchParams  } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import { useAuth } from "../../context/AuthContextProvider";
import { useEffect } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import FilterMovie from "../movies/FilterMovie";
import Cart from "../../Cart/Cart";



const pages = [
  {
    type: "Фильмы",
    path: "/movies",
  },
  {
    type: "Избранное",
    path: "/fav",
  },
  {
    type: "Корзина",
    path: "/cart",
  },
];
const settings = [
  {
    type: "Регистрация",
    path: "/register",
  },
  {
    type: "Авторизация",
    path: "/login",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  useEffect(() => {
    // getUserFromStorage();
    // console.log('qwert');
  }, [])

  useEffect(() => {
    // initStorage()
  }, [])

  const { user, cart,  logout } = useAuth();
  const {movies, getMovies} = useMovies()
  const navigate = useNavigate();
  const { initStorage } = useAuth();

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if(localStorage.getItem("user")){
      // console.log(user);
  };
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q") || "")

  useEffect(()=>{
    setSearchParams({
      q: search
    })
    }, [search]);

    useEffect(()=>{
      getMovies()
      }, [searchParams, ]);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: "#07050e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
            onClick={() => navigate("/")}
            src="https://solea-central.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.type} onClick={() => navigate(page.path)}>
                  <Typography textAlign="center">{page.type}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                  <Typography
                    onClick={() => navigate("/add")}
                    textAlign="center"
                  >
                    Добавить
                  </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <FilterMovie />
                  <Cart onClick={() => navigate('/cart')}/>
                </Typography>
              </MenuItem>
              
            
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
              key={page.type}
              onClick={() => navigate(page.path)}
              sx={{ my: 2, color: "white", display: "block" }}
              className="nav-btns"
              >
                {page.type}
              </Button>
            ))}
            <MenuItem>
                <FilterMovie style={{color: 'black'}} />
              </MenuItem>
              <MenuItem>
                <Typography
                className='nav-btns'
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => navigate("/add")}
                  textAlign="center"
                >
                  Добавить
                </Typography>
              </MenuItem>
          </Box>
          <Box className="platnyi">
            <Button
              className="platnyi1"
              style={{ background: "red", color: "white" }}
              onClick={() => navigate('/form')}
            >
              Смотреть 14 дней за 1 $
            </Button>
          </Box>
          <Box style={{ marginRight: "2%" }}>
            <div className="searchBar">
              <SearchIcon sx={{ color: "rgb(135, 135, 135)" }} />
              <input className="put" type="text" placeholder="Search..." onChange={(e) => {setSearch(e.target.value); navigate("/movies")}}/>
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PortraitOutlinedIcon
                  className="portIcon"
                  sx={{ color: "rgb(135, 135, 135)", transition: ".5s" }}
                  fontSize="large"
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            {user? (
              <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem
                  key={setting.type}
                  onClick={() => navigate(setting.path)}
                >
                  <Typography textAlign="center">{setting.type}</Typography>
                </MenuItem>
              ))} */}
              <Typography sx={{fontSize: "12px", padding: "0 8px"}}>{user}</Typography>
              <MenuItem onClick={logout}>Выйти</MenuItem>
            </Menu>
            ) : (

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.type}
                  onClick={() => navigate(setting.path)}
                >
                  <Typography textAlign="center">{setting.type}</Typography>
                </MenuItem>
              ))}

              {/* <MenuItem onClick={logout}>Выйти</MenuItem> */}
            </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
