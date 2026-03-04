import logo from "../assets/images/logo.svg";
import { ICON_MAP } from "../data/iconRegistry";
import { CircleDashed } from "lucide-react";

export default function Sidebar({ profiles, activeId, onSelectProfile }) {
  return (
    <aside className="bg-bg-base flex h-full w-[270px] flex-col justify-between border-r border-white/5">
      <img src={logo} alt="CounterFlow logo" className="mt-4" />

      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <p className="text-text-muted mb-3 px-2 text-[10px] font-semibold tracking-widest">
          COUNTER PROFILES
        </p>

        {profiles.map((profile) => {
          const Icon = ICON_MAP[profile.icon] ?? CircleDashed;
          const isActive = profile.id === activeId;

          return (
            <div
              key={profile.id}
              onClick={() => onSelectProfile(profile.id)}
              className={`mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 ${isActive ? "bg-accent-primary text-text-primary" : "text-text-secondary hover:bg-bg-card"}`}
            >
              <Icon size={16} />
              <span className="text-sm font-medium">{profile.name}</span>
              {isActive && (
                <div className="bg-accent-glow ml-auto h-2 w-2 rounded-full"></div>
              )}
            </div>
          );
        })}
      </nav>
      <div className="mb-4 px-2">
        <div className="mb-2 flex justify-between">
          <span>Weekly Goal</span>
          <span>65% Reached</span>
        </div>
        <div className="bg-progress-track h-1.5 w-full rounded-full">
          <div
            className="bg-progress-fill h-1.5 rounded-full transition-all"
            style={{ width: "65%" }}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-bg-card h-8 w-8 rounded-full" />
          {/* avatar placeholder */}
          <div className="flex flex-col">
            <span className="text-text-primary text-sm font-semibold">
              Alex Rivers
            </span>
            <span className="text-text-muted text-[10px] tracking-wide">
              PRO ACCOUNT
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
