declare var require;
let remotedev = require('mobx-remotedev');
let mobx = require('mobx');
import { observable, action } from 'mobx';

@remotedev({ global: true })
export default class AppState {
    @observable name : string = "";

    @action
    setName(name : string) {
      this.name = name;
    }
}