import LuckyWheel from "./luckywheel/luckyWheel";
import { Segment } from "./models/luckyModel";

const model: Segment[] = [
  {
    key: "1",
    color: "red",
  },
  {
    key: "2",
    color: "cyan",
  },
  {
    key: "3",
    color: "blue",
  },
  {
    key: "4",
    color: "green",
  },
  {
    key: "5",
    color: "purple",
  },
  {
    key: "6",
    color: "grey",
  },
  {
    key: "7",
    color: "pink",
  },
  {
    key: "8",
    color: "magenta",
  },
];

const App = () => {
  return <LuckyWheel segments={model} radius={250} />;
};

export default App;
