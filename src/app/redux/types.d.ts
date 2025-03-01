import { store } from './store';

declare global {
  type GlobalState = ReturnType<typeof store.getState>;
  type GlobalDispatch = typeof store.dispatch;
}
