import { getRandomInt } from "@/utils/utils";
import { AttackType } from "@/utils/type";

export default class Player {
  private name: string;
  private hp: number;
  private maxHp: number;
  private atk: number;
  private speed: number;
  private currentSpeed: number;

  constructor(name: string, hp: number, atk: number, speed: number) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.atk = atk;
    this.speed = speed;
    this.currentSpeed = 0;
  }

  public getName(): string {
    return this.name;
  }

  public getHp(): number {
    return this.hp;
  }

  public getMaxHp(): number {
    return this.maxHp;
  }

  public getAtk(): number {
    return this.atk;
  }

  public getHpPercent(): number {
    return Math.round((this.hp / this.maxHp) * 100);
  }

  public getSpeedPercent(): number {
    return Math.round((this.currentSpeed / 1000) * 100);
  }

  public getDammage(hp: number): void {
    this.hp = this.hp - hp;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  public classicAttack(): AttackType {
    const criticalNumber = getRandomInt(1, 100);
    let dammage: number = 0;
    let critical: boolean = false;
    criticalNumber <= 85
      ? ((dammage = this.getAtk()), (critical = false))
      : ((dammage = this.getAtk() * 1.5), (critical = true));

    return {
      dammage: dammage,
      critical: critical,
      type: "classicAttack",
    };
  }

  public getSpeed(): number {
    return this.speed;
  }
  public getCurrentSpeed(): number {
    return this.currentSpeed;
  }

  public setCurrentSpeed(): void {
    this.currentSpeed = this.currentSpeed + this.speed;
    if (this.currentSpeed > 1000) {
      this.currentSpeed = 1000;
    }
  }

  public resetCurrentSpeed(): void {
    this.currentSpeed = 0;
  }
}
