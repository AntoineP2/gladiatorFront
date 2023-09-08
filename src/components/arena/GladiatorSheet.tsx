"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Player from "@/class/Player";
import { theme } from "@/utils/color";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

type ChildComponentProps = {
  player: Player;
};

export default function GladiatorSheet(props: ChildComponentProps) {
  // Variable
  const avatar = <Avatar {...stringAvatar(props.player.getName())} />;

  // Fonction

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardHeader avatar={avatar} title={props.player.getName()}></CardHeader>
      <CardContent>
        <Divider textAlign="center"> Barre de vie</Divider>
        <ThemeProvider theme={theme.lifeBar}>
          <LinearProgress
            value={props.player.getHpPercent()}
            variant="determinate"
            color={
              props.player.getHpPercent() > 50
                ? "primary"
                : props.player.getHpPercent() > 20
                ? "secondary"
                : "error"
            }
            className="mt-5 mb-5"
          />
        </ThemeProvider>
        <Divider textAlign="center"> Barre de Mana</Divider>
        <ThemeProvider theme={theme.manaBar}>
          <LinearProgress
            value={100}
            variant="determinate"
            color="primary"
            className="mt-5 mb-5"
          />
        </ThemeProvider>
        <Divider textAlign="center">Barre de vitesse</Divider>
        <ThemeProvider theme={theme.speedBar}>
          <LinearProgress
            value={props.player.getSpeedPercent()}
            variant="determinate"
            color="primary"
            className="mt-5 mb-2"
          />
        </ThemeProvider>
        <Divider textAlign="center" className="mt-5 mb-2">
          Attaque
        </Divider>
        <Typography variant="body1" align="center" sx={{ fontWeight: "bold" }}>
          {props.player.getAtk()}
        </Typography>
      </CardContent>
    </Card>
  );
}
