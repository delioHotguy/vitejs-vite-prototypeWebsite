test('basic test', () => {
  expect(1 + 1).toBe(2);
});

import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOMClient.createRoot(div).render(<App />);
});