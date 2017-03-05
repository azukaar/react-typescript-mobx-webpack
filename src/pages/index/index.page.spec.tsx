import test from 'ava'
import * as React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
const expect = chai.expect;

import AppState from '../../stores/appState/appState.mock'

import IndexPage from './index.page';
const IndexPageWrapped = (IndexPage as any).wrappedComponent; // MOBX wrap our component


test('it should exists', async (t) => {
  const wrapper = shallow(<IndexPageWrapped appState={new AppState()}/>);
  chai.expect(wrapper).to.exist
})

test('it should have an input', async (t) => {
  const wrapper = shallow(<IndexPageWrapped appState={new AppState()}/>);
  expect(wrapper).to.have.descendants('input')
})