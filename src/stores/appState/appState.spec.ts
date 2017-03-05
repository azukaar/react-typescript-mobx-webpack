import test from 'ava'

import AppState from './appState.store'


test('it should edit name', async (t) => {
  const appState = new AppState()
  appState.setName("test")
  t.is(appState.name, "test");
})