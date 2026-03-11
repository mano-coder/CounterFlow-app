import { TriangleAlert } from "lucide-react";

export default function ConfirmationDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191022]/80 backdrop-blur-[2px]">
      <div className="bg-progress-fill/30 border-progress-fill/30 flex flex-col items-center gap-4 rounded-[32px] border px-10 py-8 text-white shadow-2xl shadow-black/10 backdrop-blur-[4px]">
        <div className="bg-accent-primary/30 mb-4 rounded-2xl p-4">
          <TriangleAlert className="text-accent-primary" size={28} />
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Reset Counter?
        </h1>
        <p className="text-text-secondary max-w-sm text-center text-base leading-relaxed font-normal tracking-wide">
          This action cannot by undone. Are you sure you want to reset your
          current progress? All session data for this profile will be cleared.
        </p>
        <div className="flex w-full gap-3">
          <button
            className="flex-1 rounded-xl bg-white/10 px-10 py-3 font-semibold hover:bg-white/20"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            className="shadow-progress-fill/20 bg-accent-primary hover:bg-accent-bright flex-1 rounded-xl px-10 py-3 font-semibold shadow-lg"
            onClick={() => onConfirm()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
