import {create} from 'zustand';

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
  counter: 0,
  // In the set() function, no need to use spread operator to copy the other properties;
  // set() will MERGE the updated value into our next state object.
  increment: () => set(store => ({counter: store.counter + 1})),
  reset: () => set(() => ({counter: 0}))
}));

export default useCounterStore;
