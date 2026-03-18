import { useState } from "react";
import IconPicker from "./IconPicker";
import { useHotkeys } from "react-hotkeys-hook";

export default function CreateProfileModal({ onCancel, onCreate }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [profileName, setProfileName] = useState("");
  const [dailyGoal, setDailyGoal] = useState("");

  const handleCreate = () => {
    if (!profileName.trim() || !selectedIcon) return;
    onCreate({ name: profileName, icon: selectedIcon, dailyGoal });
  };


useHotkeys("enter", handleCreate, { enabled: !!profileName.trim() && !!selectedIcon })
useHotkeys("escape", onCancel)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191022]/80 backdrop-blur-[2px]">
      <div className="bg-progress-fill/30 border-progress-fill/30 items-left flex flex-col gap-4 rounded-[32px] border px-10 py-8 text-white shadow-2xl shadow-black/10 backdrop-blur-[4px]">
        <div className="gap-1">
          <h1 className="text-2xl font-semibold tracking-wide text-white">
            Create New Profile
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed font-light">
            Personalize your tracking space with a custom icon
          </p>
        </div>

        <IconPicker
          selectedIcon={selectedIcon}
          onSelect={(icon) => setSelectedIcon(icon)}
        />

        <div className="flex w-full flex-col gap-1">
          <label className="text-text-secondary/80 text-sm">PROFILE NAME</label>
          <input
            className="w-base relative rounded-md bg-white/10 px-1 px-3 py-2 text-sm outline-none"
            placeholder="e.g., Morning Routine"
            onChange={(e) => setProfileName(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <label className="text-text-secondary/80 text-sm">DAILY GOAL</label>
          <input
            type="number"
            className="w-base h-8xl relative appearance-none rounded-md bg-white/10 px-1 px-3 py-2 text-sm outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => setDailyGoal(e.target.value)}
          />
        </div>
        <div className="mt-3 flex w-full gap-3">
          <button
            className="flex-1 rounded-xl bg-white/10 px-10 py-3 font-semibold hover:bg-white/20"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="shadow-progress-fill/20 bg-accent-primary hover:bg-accent-bright flex-1 rounded-xl px-10 py-3 font-semibold shadow-lg"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
