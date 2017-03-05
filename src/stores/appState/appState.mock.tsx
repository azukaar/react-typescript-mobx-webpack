import sinon from 'sinon';

export default class AppState {
    name : string = "";

    setName(name : string) {
      return sinon.spy(arguments);
    }
}