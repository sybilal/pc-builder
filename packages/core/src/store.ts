import { create } from 'zustand';
import type { ComponentCategory, Game, PCComponent } from './types';

/** Build is keyed by category, so adding a second GPU replaces the first. */
export type Build = Partial<Record<ComponentCategory, PCComponent>>;

export interface BuildState {
  game: Game | null;
  build: Build;
  setGame: (game: Game | null) => void;
  addComponent: (component: PCComponent) => void;
  removeComponent: (category: ComponentCategory) => void;
  reset: () => void;
  /** Sum of priceEur across every component currently in the build. */
  spent: () => number;
}

export const useBuildStore = create<BuildState>((set, get) => ({
  game: null,
  build: {},
  setGame: (game) => set({ game }),
  addComponent: (component) =>
    set((state) => ({
      build: { ...state.build, [component.category]: component },
    })),
  removeComponent: (category) =>
    set((state) => {
      const next = { ...state.build };
      delete next[category];
      return { build: next };
    }),
  reset: () => set({ game: null, build: {} }),
  spent: () =>
    Object.values(get().build).reduce(
      (total, component) => total + (component?.priceEur ?? 0),
      0,
    ),
}));
