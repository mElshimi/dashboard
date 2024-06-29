import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import "./App.css";
import NotFound from "./Modules/Shared/Components/NotFound/NotFound";
import DashboardLayout from "./Modules/Shared/Components/DashboardLayout/DashboardLayout";
import Comp1 from "./Modules/Dashboard/Components/Comp1/Comp1";
import Comp3 from "./Modules/Dashboard/Components/Comp3/Comp3";
import Comp2 from "./Modules/Dashboard/Components/Comp2/Comp2";

function App() {
  // state for getting mode and checking mode status from local storage, if not found any status will be set to dark
  const [mode, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "dark"
      : localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );
  // theme for dark and light mode with custom palettes by material ui
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            bgSidebar: {
              main: "#203FC7",
              contrastText: "#fff",
            },
            bgNav: {
              main: "#F8F9FB",
              contrastText: "#000",
            },
            bgitem: {
              main: "rgba(26, 27, 30, 0.17)",
            },
            bditem: {
              main: "#152C5B",
            },
          }
        : {
            // palette values for dark mode
            bgSidebar: {
              main: "#121212",
              contrastText: "#fff",
            },
            bgNav: {
              main: "#272727",
              contrastText: "#fff",
            },
            bgitem: {
              main: "rgb(84, 84, 84, 0.35)",
            },
            bditem: {
              main: "rgb(84, 84, 84)",
            },
          }),
    },
  });
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <DashboardLayout setTheme={setTheme} />,
      children: [
        {
          path: "comp1",
          element: <Comp1 />,
        },
        {
          path: "comp2",
          element: <Comp2 />,
        },
        {
          path: "comp3",
          element: <Comp3 />,
        },
      ],
    },
  ]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
