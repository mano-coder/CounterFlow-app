import { useHotkeys } from "react-hotkeys-hook";

export function useKeyboard({ increase, decrease, reset }) {
  useHotkeys("ArrowUp", increase);
  useHotkeys("ArrowDown", decrease);
  useHotkeys("r", reset);
}
