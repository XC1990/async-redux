import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
    })
}

registerServiceWorker();
