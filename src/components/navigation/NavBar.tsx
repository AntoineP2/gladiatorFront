import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ListMenu from "./ListMenu";

import { Drawer } from "@mui/material";

interface ChildComponentProps {
  onToggle: (params: String) => void;
  darkModeState: boolean;
}

export default function NavBar(props: ChildComponentProps) {
  // ---- Hook et const-----

  const [drawerState, setDrawerState] = React.useState(false);
  // ---------- Fonction ------------

  const drawerHandleClick = () => {
    setDrawerState(!drawerState);
  };
  const handleClick = () => {
    props.onToggle("heyy");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={drawerHandleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerState} onClose={drawerHandleClick}>
            <ListMenu drawerHandleClick={drawerHandleClick} />
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="end"
            onClick={handleClick}
            color="inherit"
          >
            {props.darkModeState ? <Brightness7Icon /> : <NightsStayIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
