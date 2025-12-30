import { create } from 'zustand';

// const testStore = create((set,get)=>({}))
const testStore = create(() => ({
  name: '홍길동',
  count: 1,
}));

export default testStore;
