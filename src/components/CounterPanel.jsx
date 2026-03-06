import { Minus, Plus, RotateCcw, History, Share2 } from "lucide-react";

export default function CounterPanel({ activeProfile }) {
  return (
    <div className="text-text-primary bg-bg-elevated flex flex-1 flex-col justify-between">
      <div className="flex items-center justify-between px-8 pt-8">
        <div>
          <h1 className="text-text-primary text-2xl font-bold">
            {activeProfile.name}
          </h1>
          <p className="text-text-muted text-sm">
            Active Session - Intensity High
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-bg-card text-text-muted hover:text-text-primary rounded-xl p-2">
            <History />
          </button>
          <button className="bg-bg-card text-text-muted hover:text-text-primary rounded-xl p-2">
            <Share2 />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span
          className="text-text-primary font-extrabold"
          style={{
            fontSize: "10rem",
            textShadow: `
              0 0 40px rgba(167,139,250,0.8),
              0 0 80px rgba(124,58,237,0.5),
              0 0 120px rgba(124,58,237,0.3)`,
          }}
        >
          {" "}
          {activeProfile.count}{" "}
        </span>
      </div>

    <div className="flex gap-4 mx-auto">

      <div className="flex items-center gap-2">
        <button className="bg-bg-card text-text primary hoverbg-bg-elevated rounded-2xl p-5">
          <Minus size={20} />
        </button>
        <span className="text-text-muted text-[10px] tracking-widest">
          DECREASE
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-accent-primary text-text-primary hover:bg-accent-bright rounded-2xl p-6">
          <Plus size={24} />
        </button>
        <span className="text-accent-bright text-[10px] tracking-widest">
          ADD REP
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-bg-card text-text-primary hoverbg-bg-elevated rounded-2xl p-5">
          <RotateCcw size={20} />
        </button>
        <span className="text-text-muted text-[10px] tracking-widest">
          REST
        </span>
      </div>
    </div>
    </div>
  );
}
