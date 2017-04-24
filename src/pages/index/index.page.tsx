import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import AppState from '../../stores/appState/appState.store'; 

import "./index.page.less";

@inject("appState") @observer 
export default class IndexPage extends React.Component<{appState?: AppState}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { appState } = this.props;

        return (
            <div id="index-page">
                <div>Please enter your name</div>
                
                <input  type="text" 
                        value={appState.name}
                        onChange={(event) => appState.setName((event.target as HTMLInputElement).value)}
                        />
                
                {appState.name && <div>
                    <div>Hi ! {appState.name} !</div>
                    <div>
                        
                    </div>
                </div>}
            </div>
        );
     }
};