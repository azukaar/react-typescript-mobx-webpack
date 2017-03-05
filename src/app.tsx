declare var require;
let remotedev = require('mobx-remotedev');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer, Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Router, Route, Link, browserHistory } from 'react-router';

import { StoresList } from './stores/index.store'; 

import IndexPage from './pages/index/index.page';

@observer
export default class App extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Provider {...StoresList}>
                    <Router history={browserHistory}>
                        <Route path="/" component={IndexPage} />
                    </Router>
                </Provider>
                <DevTools />
            </div>
        );
     }
};