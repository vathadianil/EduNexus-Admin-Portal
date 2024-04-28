import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  styled,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const sideNavData = [
  {
    hasSubmenu: false,
    displayText: "Dashboard",
    route: "/home",
  },
  {
    hasSubmenu: true,
    displayText: "User Management",
    submenu: [
      {
        displayText: "Users",
        route: "/home/users",
      },
    ],
  },
];

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

function SideNav({ open }) {
  return (
    <Drawer variant="permanent" open={open}>
      <Divider />
      <List sx={{ marginTop: 10 }}>
        {sideNavData.map((item, index) =>
          item.hasSubmenu ? (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {open && (
                  <ListItem
                    key={item.displayText}
                    disablePadding
                    sx={{ display: "block", marginRight: -2 }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {index === 1 && <ManageAccountsOutlinedIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.displayText}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                )}
              </AccordionSummary>
              <AccordionDetails>
                {item.submenu.map((item, index) => (
                  <Link to={item.route}>
                    <ListItem
                      key={item.displayText}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {index === 0 && <PeopleAltOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.displayText}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </AccordionDetails>
            </Accordion>
          ) : (
            <Link to={item.route}>
              <ListItem
                key={item.displayText}
                disablePadding
                sx={{ display: "block", marginTop: 1, marginBottom: 1 }}
              >
                <Card>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 && <HomeOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.displayText}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Card>
              </ListItem>
            </Link>
          )
        )}
      </List>
    </Drawer>
  );
}

export default SideNav;
