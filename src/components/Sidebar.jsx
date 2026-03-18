import { useRef, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { getIcon } from "../data/iconRegistry";
import { Plus, Settings, X } from "lucide-react";

export default function Sidebar({
  profiles,
  activeId,
  onSelectProfile,
  onCreateProfile,
  onDeleteProfile,
  setClickedDeleteProfileId,
  progressCalc,
}) {
  const profileRefs = useRef({});
  useEffect(() => {
    profileRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeId]);
  return (
    <aside className="flex h-full w-[270px] flex-col justify-between border-r border-violet-800/7 bg-[#20132F] p-3">
      <img src={logo} alt="CounterFlow logo" className="mt-4" />

      <nav className="mb-3 flex-1 px-2 py-4">
        <div className="text-accent-bright mb-3 flex items-center justify-between pl-2">
          <p className="text-text-muted text-[12px] font-semibold tracking-widest">
            COUNTER PROFILES
          </p>
          <button
            className="bg-accent-primary/20 text-primary hover:bg-primary flex items-center justify-center gap-1 rounded-md px-2 py-1 transition-all hover:text-white"
            onClick={onCreateProfile}
          >
            <Plus
              className="material-symbols-outlined text-sm font-bold"
              size={17}
            />
            <span className="text-[8px] font-bold uppercase">Add</span>
          </button>
        </div>

        <div className="h-[260px] overflow-y-auto">
          {profiles.map((profile) => {
            const Icon = getIcon(profile.icon);
            const isActive = profile.id === activeId;

            return (
              <div
                key={profile.id}
                ref={(el) => (profileRefs.current[profile.id] = el)}
                onClick={() => onSelectProfile(profile.id)}
                className={`group mb-1 flex cursor-pointer items-center gap-3 overflow-y-auto rounded-xl px-3 py-3 ${isActive ? "text-text-primary border border-purple-900 bg-[#311351]" : "text-text-secondary hover:bg-bg-card"}`}
              >
                <Icon
                  size={20}
                  className={`${isActive ? "text-accent-primary" : ""}`}
                  strokeWidth={3}
                />
                <span className="text-base font-medium">{profile.name}</span>
                {isActive && (
                  <div className="bg-accent-primary ml-auto h-2 w-2 rounded-full group-hover:hidden"></div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setClickedDeleteProfileId(profile.id);
                    onDeleteProfile();
                  }}
                  className="text-accent-primary ml-auto hidden rounded-md group-hover:flex hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </nav>
      <div className="mb-4 px-2">
        <div className="text-text-primary rounded-xl bg-[#28133F] p-4">
          <div className="text-text-secondary mb-2 flex justify-between">
            <span className="text-sm">Weekly Goal</span>
          </div>
          <div className="bg-progress-track my-2 h-1.5 w-full rounded-full">
            <div
              className="bg-progress-fill h-1.5 rounded-full transition-all"
              style={{ width: `${progressCalc}%` }}
            />
          </div>
          <span className="text-progress-fill flex justify-end text-xs font-semibold">
            {progressCalc}% Reached
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-bg-card flex h-8 w-8 justify-between rounded-full" />
            {/* avatar placeholder */}
            <div className="flex flex-col">
              <span className="text-text-primary text-sm font-semibold">
                Alex Rivers
              </span>
              <span className="text-text-muted text-[10px] font-semibold tracking-wide">
                PRO ACCOUNT
              </span>
            </div>
          </div>
          <Settings
            className="text-text-muted mr-1 flex justify-end"
            size={15}
          />
        </div>
      </div>
    </aside>
  );
}
