// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// App
import { ConnectedFeed } from './6';
import { store } from './core/init/store';

render(
    <Provider store = { store }>
        <ConnectedFeed prefix = '🌿' />
    </Provider>,
    document.getElementById('app'),
);
