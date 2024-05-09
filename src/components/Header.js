import {
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/icon.png";
import styles from "../css/header.module.css";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "#fff",
  color: "#000",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100%)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header({ toggleDrawer, open }) {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Avatar alt="EduNexus Logo" src={Logo} className={styles.logo} />
        <Typography variant="h6" noWrap component="div">
          EduNexus
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Tooltip title="Logout">
          <IconButton color="error" aria-label="Logout" onClick={onLogoutClick}>
            <Logout />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
