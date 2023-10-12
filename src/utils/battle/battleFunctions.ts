import Player from "../../class/Player";
import { AttackType } from "../type";

export function getDammage(player1: Player, player2: Player): void {
  // USELESS
}

// Fonction qui return un message en cas de coup critique, sinon il return un message normal
export function setHistoryCrit(joueurAtk: Player, joueurDef: Player, dammage : AttackType): string {
  if (dammage.critical) {
    return " COUP CRITIQUE ! " +joueurAtk.getName() +" inflige " +dammage.dammage +" dégats à " +joueurDef.getName()

  } else {
    return joueurAtk.getName() + "inflige " +dammage.dammage +"dégats à " +joueurDef.getName()
  }
};


