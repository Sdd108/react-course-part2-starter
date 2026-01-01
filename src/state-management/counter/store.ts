import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
  counter: 0,
  max: 5,
  /** In the set() function, no need to use spread operator to copy the other properties;
   * set() will MERGE the updated value into our next state object.
   * The set() function merges state at only one level.
   * If you have a nested object, you need to merge them explicitly.
   * You will use the spread operator pattern
   */
  increment: () => set(store => ({counter: store.counter + 1})),
  reset: () => set(() => ({counter: 0}))
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Counter Store", useCounterStore);
}

export default useCounterStore;
