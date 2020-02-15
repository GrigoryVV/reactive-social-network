import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { unmountComponentAtNode } from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  div);
  unmountComponentAtNode(div);
});
