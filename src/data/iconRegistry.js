import * as LucideIcons from "lucide-react";

export const getIcon = (name) => {
  if (!name) return LucideIcons.CircleDashed;
  // handles both "dumbbell" and "Dumbbell"
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return LucideIcons[capitalized] ?? LucideIcons.CircleDashed;
};
