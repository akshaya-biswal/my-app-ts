import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set) => ({
      count: 1,
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "counter-zustand",
    }
  )
);

export default useCounterStore;
