import { Degrees } from "../../constants/constants";

const randomRadians = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const useSpin = (count: number) => {
  const deg: number = randomRadians(Degrees.MIN_DEGREE, Degrees.MAX_DEGREE);
  const repeat: number = deg / Degrees.PERFECT_CIRCLE;
  const remainDegrees: number =
    ((deg / Degrees.PERFECT_CIRCLE) % 1) * Degrees.PERFECT_CIRCLE;
  const portion: number = Degrees.PERFECT_CIRCLE / count;
  const winnerIndex: number = Math.ceil((deg / portion))%count;

  return { repeat, remainDegrees, winnerIndex, deg,portion };
};
