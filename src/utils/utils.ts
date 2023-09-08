export function getRandomInt(min: number, max: number): number {
  // Methode pour générer un nombre aléatoire
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
