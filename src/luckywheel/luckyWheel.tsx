import { useCallback, useEffect } from "react";
import { Degrees } from "../constants/constants";
import { LuckyWheelProps } from "../models/luckyModel";
import { LuckyWheelWrapper, Wheel } from "../style";
import { useSpin } from "./spin/useSpin";
import {Indicator} from '../style'
const LuckyWheel = ({ segments = [], radius = 250 }: LuckyWheelProps) => {
  const { repeat, winnerIndex,remainDegrees ,portion} = useSpin(segments?.length);
  const diameter: number = Number(radius) * 2;

  useEffect(() => {
    const winner = segments?.find((segment) => +segment.key === + ((segments.length+1) - winnerIndex));
    console.log(winner?.color, winnerIndex);
  }, [winnerIndex, segments]);

  const polarToCartesian = useCallback(
    (angle: number) => {
      const radian =
        ((angle - Degrees.QUARTER_CIRCLE) * Math.PI) / Degrees.HALF_CIRCLE;

      return {
        x: Number(radius) + Number(radius) * Math.cos(radian),
        y: Number(radius) + Number(radius) * Math.sin(radian),
      };
    },
    [radius]
  );

  const arc = useCallback(
    (index: number, segmentsCount: number) => {
      const endAngle = ((index + 1) * Degrees.PERFECT_CIRCLE) / segmentsCount;
      const startAngle = (index * Degrees.PERFECT_CIRCLE) / segmentsCount;

      const start = polarToCartesian(endAngle);
      const end = polarToCartesian(startAngle);

      const arcFlag = endAngle - startAngle <= Degrees.HALF_CIRCLE ? "0" : "1";

      const path = [
        "M",
        start.x,
        start.y,
        "A",
        Number(radius),
        Number(radius),
        0,
        arcFlag,
        0,
        end.x,
        end.y,
        "L",
        Number(radius),
        Number(radius),
        "Z",
      ].join(" ");

      return path;
    },
    [polarToCartesian, radius]
  );
console.log(winnerIndex,repeat)
  return (
    <LuckyWheelWrapper>
        <Indicator />
    <Wheel {...{repeat}} width={diameter} height={diameter}>
      <svg width={diameter} height={diameter}>
        {segments?.map(({ color, key }, index) => (
          <path key={key} d={arc(index, segments?.length)} fill={color} />
        ))}
      </svg>
    </Wheel>
    </LuckyWheelWrapper>
    
    
  );
};

export default LuckyWheel;
