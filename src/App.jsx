import { useState, useEffect } from "react";
import { useKeyboard } from "./hooks/useKeyboard";

import Sidebar from "./components/Sidebar";
import CounterPanel from "./components/CounterPanel";
import CounterDisplay from "./components/CounterDisplay";
import QuickStats from "./components/QuickStats";

const initialProfiles = [
  {
    id: "gym-reps",
    name: "Gym Reps",
    icon: "dumbbell",
    count: 42,
    goal: 100,
    history: [30, 45, 38, 55, 40, 41, 42],
  },
  {
    id: "water-intake",
    name: "Water Intake",
    icon: "droplet",
    count: 6,
    goal: 8,
    history: [8, 6, 7, 8, 5, 6, 6],
  },
  {
    id: "project-tasks",
    name: "Project Tasks",
    icon: "flame",
    count: 3,
    goal: 10,
    history: [5, 8, 4, 9, 6, 7, 3],
  },
  {
    id: "calorie-track",
    name: "Calorie Track",
    icon: "utensils",
    count: 1840,
    goal: 2500,
    history: [2100, 1950, 2300, 1800, 2200, 2050, 1840],
  },
];

export default function App() {
  // set shortcuts
  const increase = () => handleIncrease();
  const decrease = () => handleDecrease();
  const reset = () => resetCount();
  const tab = () => switchProfileKey();
  useKeyboard({ increase, decrease, reset, tab });

  const [profiles, setProfiles] = useState(() => {
    const savedItems = localStorage.getItem("profiles");
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return initialProfiles;
  });

  const [activeId, setActiveId] = useState(() => {
    const savedActiveId = localStorage.getItem("active-id")
    if (savedActiveId) {
      return JSON.parse(savedActiveId);
    }
    return profiles[0].id;
  });

  const activeProfile = profiles.find((profile) => profile.id === activeId);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    localStorage.setItem("active-id", JSON.stringify(activeId));
  }, [activeId]);

  const handleDecrease = () => {
    const newValue = profiles.map((profile) => {
      if (profile.id === activeId) {
        return {
          ...profile,
          count: profile.count > 0 ? profile.count - 1 : 0,
        };
      } else {
        return profile;
      }
    });
    setProfiles(newValue);
  };

  const handleIncrease = () => {
    const newValue = profiles.map((profile) => {
      if (profile.id === activeId) {
        return {
          ...profile,
          count: profile.count + 1,
        };
      } else {
        return profile;
      }
    });
    setProfiles(newValue);
  };

  const resetCount = () => {
    const newValue = profiles.map((profile) => {
      if (profile.id === activeId) {
        return {
          ...profile,
          count: 0,
        };
      } else {
        return profile;
      }
    });
    setProfiles(newValue);
  };

  const switchProfileKey = () => {
    const activeIdIndex = profiles.findIndex(
      (id) => id.id === activeProfile.id,
    );
    const nextActiveId = profiles[activeIdIndex + 1];
    if (activeIdIndex < profiles.length - 1) {
      setActiveId(nextActiveId.id);
    } else {
      setActiveId(profiles[0].id);
    }
  };

  return (
    <div className="bg-bg-base flex h-screen overflow-hidden">
      <Sidebar
        profiles={profiles}
        activeId={activeId}
        onSelectProfile={(id) => setActiveId(id)}
      />
      <main className="flex flex-1 flex-col overflow-y-auto">
        <CounterPanel
          activeProfile={activeProfile}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          resetCount={resetCount}
        />
        <QuickStats activeProfile={activeProfile} />
      </main>
    </div>
  );
}
