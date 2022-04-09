export default class Draw implements IDraw {
  constructor(
    public date: string,
    public numbers: number[],
    public additionalNumbers: number[]
  ) {}

  toString(): string {
    const numbers = this.numbers.join("-");
    const additionalNumbers = this.additionalNumbers.join("-");

    return numbers + "-" + additionalNumbers;
  }

  static toDraw = (draw: IDraw): Draw => {
    return new Draw(draw.date, draw.numbers, draw.additionalNumbers);
  };
}

export interface IDraw {
  date: string;
  numbers: number[];
  additionalNumbers: number[];
}
