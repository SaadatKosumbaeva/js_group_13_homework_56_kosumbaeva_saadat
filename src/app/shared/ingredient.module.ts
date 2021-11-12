export class Ingredient {
  constructor(public name: string, public amount: number = 0, public cost: number) {}

  getPrice() {
    return this.amount * this.cost;
  }
}
