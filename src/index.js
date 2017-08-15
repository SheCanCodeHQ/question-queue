import React from 'react';
import ReactDOM from 'react-dom';
import WidgetContainer from './containers/WidgetContainer';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers)

ReactDOM.render(<Provider store={store}>
    <WidgetContainer />
  </Provider>, document.getElementById('question-queue-widget'));
// registerServiceWorker();
