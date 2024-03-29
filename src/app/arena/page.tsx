"use client";
import React from "react";
import GladiatorSheet from "../../components/arena/GladiatorSheet";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Player from "../../class/Player";
import HistorySheet from "@/components/arena/HistorySheet";
import { getRandomInt } from "@/utils/utils";
import { AttackType } from "@/utils/type";
import * as battleFunction from "../../utils/battle/battleFunctions";

// ------- TYPE -----

const joueur1: Player = new Player("Axel Gout", 1500, 200, 80);
const joueur2: Player = new Player("Antoine Pado", 1250, 300, 60);

let joueur1StackSpeed: number = 0;
let joueur2StackSpeed: number = 0;



export default function page() {
  // --------------------Variable State--------------------

  const [fightState, setFightState] = React.useState(true);

  const [startFightState, setStartFightState] = React.useState(false); // True si joueur 2, false si joueur 1
  const [turnToPlayJoueur1, setTurnToPlayJoueur1] = React.useState(false);
  const [turnToPlayJoueur2, setTurnToPlayJoueur2] = React.useState(false); // Si c'est au joueur2 de jouer alors la valeur est true

  const [history, setHistory] = React.useState(["Début du combat"]);


  // ------------------------Fonction--------------------------

  // Fonction pour la vitesse de combat
  const battleSpeed = () => {
    // On verifie la difference de vitesse pour reseter la vitesse du plus rapide
    if (joueur1StackSpeed > joueur2StackSpeed) {
      joueur1.resetCurrentSpeed();
    } else if (joueur1StackSpeed < joueur2StackSpeed) {
      joueur2.resetCurrentSpeed();
    } else {
      joueur1.resetCurrentSpeed();
      joueur2.resetCurrentSpeed();
    }
    joueur1StackSpeed = joueur1.getCurrentSpeed();
    joueur2StackSpeed = joueur2.getCurrentSpeed();
    while (joueur1StackSpeed < 1000 && joueur2StackSpeed < 1000) {
      joueur1.setCurrentSpeed();
      joueur2.setCurrentSpeed();
      joueur1StackSpeed = joueur1.getCurrentSpeed();
      joueur2StackSpeed = joueur2.getCurrentSpeed();
    }
    if (joueur1StackSpeed > joueur2StackSpeed) {
      setTurnToPlayJoueur1(true);
    } else if (joueur1StackSpeed < joueur2StackSpeed) {
      setTurnToPlayJoueur2(true);
    } else {
      if (getRandomInt(0, 100) <= 50) {
        setTurnToPlayJoueur1(true);
      } else {
        setTurnToPlayJoueur2(true);
      }
    }
  };


  // Fonction qui gère un tour de combat
  const oneTurn = (joueurAtk: Player, joueurDef: Player) => {
    let dammage: AttackType = joueurAtk.classicAttack();
    joueurDef.getDammage(dammage.dammage);
    setHistory([...history, battleFunction.setHistoryCrit(joueurAtk, joueurDef, dammage)]); // Si dommage critique
    if (joueurDef.getHp() <= 0) {
      setHistory([
        ...history,
        "Fin du combat, " + joueurAtk.getName() + " a gagné !",
      ]);
      setFightState(false);
    }
  };

  // Fonction qui déclanche l'action de combat 'Attaquer'
  const handleClickDammage = () => {
    if (turnToPlayJoueur1) {
      oneTurn(joueur1, joueur2);
      setTurnToPlayJoueur1(false);
    } else if (turnToPlayJoueur2) {
      oneTurn(joueur2, joueur1);
      setTurnToPlayJoueur2(false);
    }
    battleSpeed();
  };
 // On lance le combat
  const handleClickStartFight = () => {
    battleSpeed();
    setStartFightState(true);
  };

  // -------------------- Variable de composant --------------------

  const buttonPlayer = <Button onClick={handleClickDammage} variant="outlined" fullWidth> {joueur1.getName() + " : Attaque"} </Button>
  const buttonIA = <Button onClick={handleClickDammage} variant="outlined" fullWidth> {joueur2.getName() + " prépare son action"} </Button>
  
  const buttonStart = <Button onClick={handleClickStartFight} variant="outlined" fullWidth color="success"> DEBUT DU COMBAT </Button>
  const buttonEnd =<Button variant="outlined" fullWidth color="error"> FIN DU COMBAT</Button>


  // -------------------- Render --------------------
  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} className="mb-8">
          <Typography variant="h1" align="center">
            Arena
          </Typography>
        </Grid>
        <Grid item xs={4} className=" flex">
          <GladiatorSheet player={joueur1} />
        </Grid>
        <Grid item xs={4}>
          {fightState && startFightState ? turnToPlayJoueur1
            ? buttonPlayer
            : buttonIA
            : fightState && !startFightState ?
              buttonStart : buttonEnd}
        </Grid>
        <Grid item xs={4} className="flex justify-end">
          <GladiatorSheet player={joueur2} />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <HistorySheet history={history} />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}
