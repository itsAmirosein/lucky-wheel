import styled, { CSSProperties, keyframes } from "styled-components";

interface WheelProps extends CSSProperties {
  repeat?: number;
  width?: number | string;
  height?: number | string;
}

const cubic = `cubic-bezier(
  ${(Math.random() + 0.2) * 0.6 + 0.6},
  -0.085,
  0.35,
  ${(Math.random() + 0.2) * 0.6 + 0.4}
)`;

const spin = (repeat: number = 1) => keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(${repeat}turn);
  }
`;

export const Wheel = styled.div<WheelProps>`

  width: ${({ width }) =>
    String(width).includes("px") ? width : `${width}px`};
  height: ${({ height }) =>
    String(height).includes("px") ? height : `${height}px`};
  animation: 10s both ${({ repeat }) => spin(repeat)} ${cubic};
  svg {
    position: absolute;
  }
`;

export const Indicator = styled.div`
  ::after{
    content:'';
    position:absolute;
    left:50%;
  display: inline-block;
  border-width: 7px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  }
`;
export const LuckyWheelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

`;
