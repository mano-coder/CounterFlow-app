import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import * as LucideIcons from "lucide-react";

const ICON_CATEGORIES = {
  All: null,
  Health: [
    "Heart",
    "Activity",
    "Apple",
    "Dumbbell",
    "Bike",
    "Wind",
    "Droplets",
  ],
  Mind: ["Brain", "BookOpen", "Lightbulb", "Sparkles", "Moon", "Star"],
  Work: ["Briefcase", "Laptop", "Code", "PenLine", "ClipboardList", "Clock"],
  Life: ["Home", "Coffee", "Music", "Smile", "Sun", "Leaf", "Flame"],
};

const ALL_ICONS = Object.values(ICON_CATEGORIES).flat().filter(Boolean);

function useIconPicker() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIcons = useMemo(() => {
    const pool =
      activeCategory === "All"
        ? ALL_ICONS
        : (ICON_CATEGORIES[activeCategory] ?? []);
    return pool.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, activeCategory]);

  return {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    filteredIcons,
  };
}

export default function IconPicker({ onSelect, selectedIcon }) {
  const {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    filteredIcons,
  } = useIconPicker();

  return (
    <>
      <div className="relative w-full rounded-xl bg-white/10 px-3 py-2">
        <Search
          className="absolute top-1/2 left-3 -translate-y-1/2"
          size={16}
        />
        <input
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent pl-9 text-sm text-white outline-none"
        />
      </div>
      <div className="flex gap-2">
        {Object.keys(ICON_CATEGORIES).map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-accent-primary shadow-accent-primary/50 text-white shadow-lg"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="grid h-[90px] w-full grid-cols-6 gap-2 overflow-y-auto">
        {filteredIcons.map((iconName) => {
          const Icon = LucideIcons[iconName];
          if (!Icon) return null;
          return (
            <button
              key={iconName}
              onClick={() => onSelect(iconName)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl p-2 transition-colors ${
                selectedIcon === iconName
                  ? "bg-accent-primary shadow-accent-primary/50 shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              title={iconName}
            >
              <Icon size={20} />
            </button>
          );
        })}
        {filteredIcons.length === 0 && (
          <p className="col-span-6 py-4 text-center text-xs text-white/40">
            No icons found
          </p>
        )}
      </div>
    </>
  );
}
