import { LayoutDashboard } from "lucide-react";

export default function EmptyState({ onCreateProfile }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191022]/80 backdrop-blur-[2px]">
      <div className="bg-progress-fill/30 border-progress-fill/30 flex flex-col items-center gap-4 rounded-[32px] border px-10 py-8 text-white shadow-2xl shadow-black/10 backdrop-blur-[4px]">
        <div className="bg-accent-primary/30 rounded-2xl p-4">
          <LayoutDashboard className="text-accent-primary" size={28} />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-semibold tracking-wide text-white">
            No Profiles Yet
          </h1>
          <p className="text-text-secondary max-w-xs text-sm font-light leading-relaxed">
            Create your first counter profile to start tracking your progress
          </p>
        </div>
        <div className="mt-3 flex w-full gap-3">
          <button
            className="bg-accent-primary hover:bg-accent-bright shadow-progress-fill/20 flex-1 rounded-xl px-10 py-3 font-semibold shadow-lg"
            onClick={onCreateProfile}
          >
            + Create Profile
          </button>
        </div>
      </div>
    </div>
  );
}
