import { useHotkeys } from "react-hotkeys-hook";
import { X } from "lucide-react";

const shortcuts = [
  { keys: "↑", description: "Increment counter" },
  { keys: "↓", description: "Decrement counter" },
  { keys: "R", description: "Reset counter" },
  { keys: "Tab", description: "Switch profile" },
  { keys: "N", description: "New profile" },
  { keys: "Enter", description: "Confirm dialog" },
  { keys: "Escape", description: "Close dialog" },
];

const tips = [
  "Click a profile in the sidebar to switch to it",
  "Hover over a profile to reveal edit and delete buttons",
  "Your data is saved automatically to your browser",
];

export default function HelpModal({ onClose }) {
  useHotkeys("escape", onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191022]/80 backdrop-blur-[2px]">
      <div className="bg-progress-fill/30 border-progress-fill/30 flex flex-col gap-4 rounded-[32px] border px-10 py-8 text-white shadow-2xl shadow-black/10 backdrop-blur-[4px]">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-wide text-white">
            Help & Shortcuts
          </h1>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary"
          >
            <X size={18} />
          </button>
        </div>

        {/* Shortcuts */}
        <div className="flex flex-col gap-2">
          <p className="text-text-muted text-[10px] font-semibold tracking-widest">
            KEYBOARD SHORTCUTS
          </p>
          {shortcuts.map((shortcut) => (
            <div
              key={shortcut.keys}
              className="flex items-center justify-between gap-8"
            >
              <kbd className="rounded-md bg-white/10 px-3 py-1 font-mono text-xs text-text-primary">
                {shortcut.keys}
              </kbd>
              <span className="text-text-secondary text-sm">
                {shortcut.description}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Tips */}
        <div className="flex flex-col gap-2">
          <p className="text-text-muted text-[10px] font-semibold tracking-widest">
            TIPS
          </p>
          {tips.map((tip) => (
            <div key={tip} className="flex items-start gap-2">
              <span className="text-accent-primary mt-1 text-xs">•</span>
              <span className="text-text-secondary text-sm">{tip}</span>
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-2 w-full rounded-xl bg-white/10 py-3 font-semibold hover:bg-white/20"
        >
          Close
        </button>

      </div>
    </div>
  );
}
