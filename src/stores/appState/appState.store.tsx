import remotedev from 'mobx-remotedev';
import { observable, action } from 'mobx';

@remotedev({ global: true })
export default class AppState {
    @observable name : string = "";

    @action
    setName(name : string) {
      this.name = name;
    }
}