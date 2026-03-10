import { useHotkeys } from "react-hotkeys-hook";

export function useKeyboard({ increase, decrease, reset, tab }) {
  useHotkeys("ArrowUp", (e) => {
    e.preventDefault();
    increase();
  });

  useHotkeys("ArrowDown", (e) => {
    e.preventDefault();
    decrease();
  });

  useHotkeys("r", reset);

  useHotkeys("tab", (e) => {
    e.preventDefault();
    tab();
  });
}
