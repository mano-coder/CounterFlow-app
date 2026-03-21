import { useState, useEffect, useRef } from "react";
import { useKeyboard } from "./hooks/useKeyboard";
import { Menu } from "lucide-react";

import Sidebar from "./components/Sidebar";
import CounterPanel from "./components/CounterPanel";
import QuickStats from "./components/QuickStats";
import ConfirmationDialog from "./components/ConfirmationDialog";
import CreateProfileModal from "./components/CreateProfileModal";
import DeleteConfirmationDialog from "./components/DeleteConfirmationDialog";
import EmptyState from "./components/EmptyState";
import HelpModal from "./components/HelpModal";

/*
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
*/

export default function App() {
  const [profiles, setProfiles] = useState(() => {
    const savedItems = localStorage.getItem("profiles");
    if (savedItems) return JSON.parse(savedItems);
    return [];
  });

  const [activeId, setActiveId] = useState(() => {
    const savedActiveId = localStorage.getItem("active-id");
    if (savedActiveId) return JSON.parse(savedActiveId);
    return profiles[0].id && null ;
  });

  const [isResetOpen, setIsResetOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProfileId, setEditingProfileId] = useState(null);
  const [clickedDeleteProfileId, setClickedDeleteProfileId] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const activeProfile = profiles.find((profile) => profile.id === activeId);

  const mainRef = useRef(null);
  const quickStatsRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    localStorage.setItem("active-id", JSON.stringify(activeId));
  }, [activeId]);

  const handleDecrease = () => {
    setProfiles(
      profiles.map((profile) => {
        if (profile.id !== activeId) return profile;
        const newCount = profile.count > 0 ? profile.count - 1 : 0;
        return {
          ...profile,
          count: newCount,
          history: profile.history.map((val, i) => (i === 6 ? newCount : val)),
        };
      }),
    );
  };

  const handleIncrease = () => {
    setProfiles(
      profiles.map((profile) => {
        if (profile.id !== activeId) return profile;
        const newCount = profile.count + 1;
        return {
          ...profile,
          count: newCount,
          history: profile.history.map((val, i) => (i === 6 ? newCount : val)),
        };
      }),
    );
  };

  const resetCount = () => {
    setProfiles(
      profiles.map((profile) => {
        if (profile.id !== activeId) return profile;
        return {
          ...profile,
          count: 0,
          history: profile.history.map((val, i) => (i === 6 ? 0 : val)),
        };
      }),
    );
  };

  const switchProfileKey = () => {
    const activeIdIndex = profiles.findIndex((p) => p.id === activeProfile.id);
    if (activeIdIndex < profiles.length - 1) {
      setActiveId(profiles[activeIdIndex + 1].id);
    } else {
      setActiveId(profiles[0].id);
    }
  };

  const handleCreate = ({ name, icon, dailyGoal }) => {
    const newProfile = {
      id: crypto.randomUUID(),
      name,
      icon,
      count: 0,
      goal: Number(dailyGoal) || 0,
      history: [0, 0, 0, 0, 0, 0, 0],
    };
    setProfiles([...profiles, newProfile]);
    setActiveId(newProfile.id);
    setShowCreateModal(false);
  };

  const handleDelete = (id) => {
    const updated = profiles.filter((profile) => profile.id !== id);
    setProfiles(updated);
    if (activeId === id) setActiveId(updated[0]?.id ?? null);
  };

  const handleEdit = ({ name, icon, dailyGoal }) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === editingProfileId
          ? { ...profile, name, icon, goal: Number(dailyGoal) || 0 }
          : profile,
      ),
    );
    setShowEditModal(false);
  };

  const isAnyModalOpen =
    isResetOpen ||
    showCreateModal ||
    showDeleteModal ||
    showEditModal ||
    isHelpOpen;

  useKeyboard({
    increase: handleIncrease,
    decrease: handleDecrease,
    reset: () => setIsResetOpen(true),
    tab: switchProfileKey,
    isModalOpen: isAnyModalOpen,
    closeModal: () => {
      setIsResetOpen(false);
      setIsHelpOpen(false);
      setShowCreateModal(false);
      setShowDeleteModal(false);
      setShowEditModal(false);
    },
    confirm: () => {
      resetCount();
      setIsResetOpen(false);
    },
    setShowCreateModal: () => setShowCreateModal(true),
    handleCreate: handleCreate,
    isCreateOpen: showCreateModal,
    onHelpClick: () => setIsHelpOpen(true),
  });

  if (profiles.length === 0) {
    return (
      <>
        {showCreateModal && (
          <CreateProfileModal
            onCancel={() => setShowCreateModal(false)}
            onCreate={handleCreate}
          />
        )}
        {!showCreateModal && (
          <EmptyState onCreateProfile={() => setShowCreateModal(true)} />
        )}
      </>
    );
  }

  const progressCalc =
    activeProfile.goal > 0
      ? Math.min(
          Math.round((activeProfile.count / activeProfile.goal) * 100),
          100,
        )
      : 0;

  return (
    <>
      {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
      {showEditModal && (
        <CreateProfileModal
          mode="edit"
          initialValues={profiles.find((p) => p.id === editingProfileId)}
          onCancel={() => setShowEditModal(false)}
          onEdit={handleEdit}
        />
      )}
      {showDeleteModal && (
        <DeleteConfirmationDialog
          onConfirm={() => {
            setShowDeleteModal(false);
            handleDelete(clickedDeleteProfileId);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
      {showCreateModal && (
        <CreateProfileModal
          onCancel={() => setShowCreateModal(false)}
          onCreate={handleCreate}
        />
      )}
      {isResetOpen && (
        <ConfirmationDialog
          onConfirm={() => {
            resetCount();
            setIsResetOpen(false);
          }}
          onCancel={() => setIsResetOpen(false)}
        />
      )}

      <div className="bg-bg-base flex h-screen overflow-hidden">
        <Sidebar
          profiles={profiles}
          activeId={activeId}
          onSelectProfile={(id) => {
            setActiveId(id);
            setIsSidebarOpen(false);
          }}
          onCreateProfile={() => setShowCreateModal(true)}
          onDeleteProfile={() => setShowDeleteModal(true)}
          setClickedDeleteProfileId={setClickedDeleteProfileId}
          progressCalc={progressCalc}
          onEditProfile={() => setShowEditModal(true)}
          setEditingProfileId={setEditingProfileId}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main ref={mainRef} className="flex flex-1 flex-col overflow-y-auto">
          {/* Mobile top bar */}
          <div className="flex items-center justify-between px-4 py-3 md:hidden">
            <button onClick={() => setIsSidebarOpen(true)}>
              <Menu size={20} className="text-text-primary" />
            </button>
            <span className="text-text-primary font-bold">CounterFlow</span>
            <div className="w-5" />
          </div>

          <CounterPanel
            activeProfile={activeProfile}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            onResetClick={() => setIsResetOpen(true)}
            onHistoryClick={() => {
              mainRef.current?.scrollTo({
                top: quickStatsRef.current?.offsetTop,
                behavior: "smooth",
              });
            }}
            onHelpClick={() => setIsHelpOpen(true)}
          />
          <QuickStats ref={quickStatsRef} activeProfile={activeProfile} />
        </main>
      </div>
    </>
  );
}
