import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout({ setTheme }) {
  //state for set sidebar collapse
  const [open, setOpen] = useState(true);

  useEffect(() => {
    //check window width for auto set sidebar collapse for responsive after component did mount
    window.innerWidth < 900 ? setOpen(false) : setOpen(true);
    // event for check width while resizing the window
    window.addEventListener("resize", function () {
      window.innerWidth < 900 ? setOpen(false) : setOpen(true);
    });
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar setOpen={setOpen} open={open} setTheme={setTheme} />
        <Box
          component="main"
          sx={{
            mt: "64px",
            minWidth: "100%",
          }}
          display="flex"
        >
          <Sidebar open={open} />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
