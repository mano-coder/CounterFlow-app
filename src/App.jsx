import Sidebar from "./components/Sidebar";
import CounterPanel from "./components/CounterPanel";
import CounterDisplay from "./components/CounterDisplay";
import QuickStats from "./components/QuickStats";

export default function App() {
  return (
    <div className="flex h-screen bg-base overflow-hidden">
    <Sidebar />
    <main className="flex-1 flex flex-col overflow-y-auto">
    <CounterDisplay />
    <CounterPanel />
    <QuickStats />
    </main>
    </div>
  );
}
