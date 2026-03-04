import { useState } from 'react'

import Sidebar from "./components/Sidebar";
import CounterPanel from "./components/CounterPanel";
import CounterDisplay from "./components/CounterDisplay";
import QuickStats from "./components/QuickStats";


const initialProfiles = [
  { id: "gym-reps", name: "Gym Reps", icon: "dumbbell" },
  { id: "water-intake", name: "Water Intake", icon: "droplet" },
  { id: "project-tasks", name: "Project Tasks", icon: "flame" },
  { id: "calorie-track", name: "Calorie Track", icon: "utensils" },
];

export default function App() {
  const [profiles, setProfiles ] = useState(initialProfiles)
  const [activeId, setActiveId] = useState("water-intake")

  const activeProfile = profiles.find((profile) => profile.id === activeId)

  return (
    <div className="flex h-screen bg-base overflow-hidden">
      <Sidebar profiles={profiles} activeId={activeId} onSelectProfile={(id) => setActiveId(id)} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <CounterDisplay />
        <CounterPanel />
        <QuickStats />
      </main>
    </div>
  );
}
