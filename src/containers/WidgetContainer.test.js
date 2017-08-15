import React from 'react';
import ReactDOM from 'react-dom';
import WidgetContainer from './WidgetContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers'

let store = createStore(reducers)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <WidgetContainer />
    </Provider>, div);
});
