import { Minus, Plus, RotateCcw, History, HelpCircle } from "lucide-react";

export default function CounterPanel({
  activeProfile,
  handleDecrease,
  handleIncrease,
  onResetClick,
  onHistoryClick,
  onHelpClick,
}) {
  return (
    <div className="text-text-primary bg-bg-main flex min-h-screen flex-1 flex-col">
      <div className="flex items-center justify-between px-8 pt-8">
        <div>
          <h1 className="text-text-primary text-3xl font-extrabold">
            {activeProfile.name}
          </h1>
          <p className="text-text-muted text-sm">
            Active Session - Intensity High
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-bg-card text-text-secondary hover:text-text-primary border-stroke-card flex h-[40px] w-[40px] items-center justify-center rounded-xl border-2 border-solid" onClick={onHistoryClick}>
            <History size={20} />
          </button>
          <button className="bg-bg-card text-text-secondary hover:text-text-primary border-stroke-card flex h-[40px] w-[40px] items-center justify-center rounded-xl border-2 border-solid" onClick={onHelpClick}>
            <HelpCircle size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around">
        <div className="m-15 flex items-center justify-center">
          <span
            className="text-text-primary leading-none font-black"
            style={{
              fontSize: "180px",
              textShadow: `
              0 0 40px rgba(167,139,250,0.8),
              0 0 80px rgba(124,58,237,0.5),
              0 0 120px rgba(124,58,237,0.3)`,
            }}
          >
            {activeProfile.count}
          </span>
        </div>

        <div className="mx-auto flex items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <button
              className="text-text-secondary hover:bg-bg-elevated border-stroke-card flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-2 bg-[#1E293B80]"
              onClick={() => handleDecrease()}
            >
              <Minus size={26} strokeWidth={3} />
            </button>
            <span className="text-text-muted text-[10px] font-bold tracking-widest">
              DECREASE
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              style={{
                boxShadow: "0px 0px 25px #7311D450",
              }}
              className="bg-accent-primary text-text-primary hover:bg-accent-bright flex h-[96px] w-[96px] items-center justify-center rounded-[24px] border-4 border-solid border-[#ffffff30]"
              onClick={() => handleIncrease()}
            >
              <Plus size={45} strokeWidth={3} />
            </button>
            <span className="text-accent-bright text-[10px] font-extrabold tracking-widest">
              ADD REP
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              className="text-text-secondary hover:bg-accent-bright border-stroke-card flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-2 bg-[#1E293B80]"
              onClick={() => onResetClick()}
            >
              <RotateCcw size={24} strokeWidth={3} />
            </button>
            <span className="text-text-muted text-[10px] font-bold tracking-widest">
              RESET
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
