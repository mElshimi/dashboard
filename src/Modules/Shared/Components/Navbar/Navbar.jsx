import { Box, IconButton, Toolbar, AppBar } from "@mui/material";
import {
  Brightness4,
  Brightness7,
  FormatAlignCenter,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

//props from the dashboard layout for handle sidebar and theme mode
export default function Navbar({ setOpen, setTheme, open }) {
  // instance form use theme material ui
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setOpen(!open);
            }}
            edge="start"
            sx={{
              marginRight: 2,
            }}
          >
            <FormatAlignCenter />
          </IconButton>
          <Box display={"flex"} justifyContent={"end"} flexGrow={1}>
            <IconButton
              aria-label="change mode"
              sx={{
                ml: 1,
                display: "flex",
                my: 1,
              }}
              onClick={() => {
                localStorage.setItem(
                  "theme",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setTheme(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
