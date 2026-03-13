import { Search } from "lucide-react";

export default function CreateProfileModal({ onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191022]/80 backdrop-blur-[2px]">
      <div className="bg-progress-fill/30 border-progress-fill/30 items-left flex flex-col gap-4 rounded-[32px] border px-10 py-8 text-white shadow-2xl shadow-black/10 backdrop-blur-[4px]">
        <div className="gap-1">
          <h1 className="text-2xl font-semibold tracking-wide text-white">
            Create New Profile
          </h1>
          <p className="text-text-secondary max-w-sm text-center text-sm leading-relaxed font-light tracking-wide">
            Personalize your tracking space with a custom icon
          </p>
        </div>
        <div className="relative w-full rounded-xl bg-white/10 py-2 px-3">
          <Search
            className="absolute top-1/2 left-3 -translate-y-1/2"
            size={16}
          />
          <input placeholder="Search icons..." className="w-full pl-9 outline-none" />
        </div>
        {/* // Category pills */}
        <div className="flex gap-2">{/* map over categories array */}</div>
        {/* // Icon grid */}
        <div className="grid max-h-[180px] w-full grid-cols-6 gap-2 overflow-y-auto">
          {/* map over filtered icons */}
        </div>
        // Profile Name input
        <div className="flex w-full flex-col gap-1">
          <label>PROFILE NAME</label>
          <input placeholder="e.g., Morning Routine" />
        </div>
        // Daily Goal input
        <div className="flex w-full flex-col gap-1">
          <label>DAILY GOAL</label>
          <input type="number" />
        </div>
        // Buttons
        <div className="flex w-full gap-3">
          <button onClick={onCancel}>Cancel</button>
          <button>Create Profile</button>
        </div>
      </div>
    </div>
  );
}
