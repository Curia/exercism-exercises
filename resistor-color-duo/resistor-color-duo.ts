const Bands = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
type Color = keyof typeof Bands;

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  value(): number {
    const [first, second] = this.colors;

    return parseInt(`${Bands[first]}${Bands[second]}`);
  }
}
