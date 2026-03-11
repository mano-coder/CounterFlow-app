import { useHotkeys } from "react-hotkeys-hook";

export function useKeyboard({
  increase,
  decrease,
  reset,
  tab,
  isModalOpen,
  closeModal,
  confirm,
}) {
  useHotkeys(
    "ArrowUp",
    (e) => {
      e.preventDefault();
      increase();
    },
    { enabled: !isModalOpen },
  );
  useHotkeys(
    "ArrowDown",
    (e) => {
      e.preventDefault();
      decrease();
    },
    { enabled: !isModalOpen },
  );
  useHotkeys("r", reset, { enabled: !isModalOpen });
  useHotkeys(
    "tab",
    (e) => {
      e.preventDefault();
      tab();
    },
    { enabled: !isModalOpen },
  );
  useHotkeys(
    "escape",
    (e) => {
      e.preventDefault();
      closeModal();
    },
    { enabled: isModalOpen },
  );
  useHotkeys(
    "enter",
    (e) => {
      e.preventDefault();
      confirm();
    },
    { enabled: isModalOpen },
  );
}
