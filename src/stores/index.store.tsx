import AppState from './appState/appState.store';

const appState = new AppState(); // This is our only global store

export const StoresList = { appState : appState };