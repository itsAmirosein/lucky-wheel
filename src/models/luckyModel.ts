export interface Spin {
  rotateCount: number;
  duration: number;
}

export interface Segment {
  key: string;
  color: string;
  id?: string | number;
  title?: string;
  subTitle?: string;
}
export interface LuckyWheelProps {
  segments: Segment[];
  radius?: number | string;
}
