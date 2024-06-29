import { Group, Home, Villa } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useLocation, useNavigate } from "react-router-dom";

//props from the dashboard layout for handle sidebar 
export default function Sidebar({ open }) {
  // instance form use navigate react-router-dom for use it to navigate to dashboard pages
  const navigate = useNavigate();
  // instance form use location react-router-dom for use it to check the path name and add active class to the sidebar item
  const location = useLocation();
  // instance form use theme material ui
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />
        <List>
          {sidebarList.map((item) => {
            return (
              <Tooltip key={item.title} title={item.title} placement="right">
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  style={{
                    backgroundColor:
                      item.path === location.pathname
                        ? `${theme.palette.bgitem.main}`
                        : "",
                    borderLeft:
                      item.path === location.pathname
                        ? `solid 6px ${theme.palette.bditem.main}`
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ opacity: open ? 1 : 0, fontSize: "5rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

// sidebar list of objects contains the list title, icon, and component path name which will navigate to
const sidebarList = [
  {
    title: "comp1",
    icon: <Home sx={{ color: "#fff" }} fontSize="large" />,
    path: "/comp1",
  },
  {
    title: "comp2",
    icon: <Group sx={{ color: "#fff" }} fontSize="large" />,
    path: "/comp2",
  },
  {
    title: "comp3",
    icon: <Villa sx={{ color: "#fff" }} fontSize="large" />,
    path: "/comp3",
  },
];

// material ui styling
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 1,
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

// sidebar width
const drawerWidth = 240;

//material ui functions handle the sidebar
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.bgSidebar.main,
  color: theme.palette.bgSidebar.contrastText,
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("xs")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    backgroundColor: theme.palette.bgSidebar.main,
  },
});
