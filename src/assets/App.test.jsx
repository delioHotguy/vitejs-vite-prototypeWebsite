import { test, expect, it } from 'vitest';

import React from 'react';
import ReactDOMClient from 'react-dom/client';

import App from ".assets/App"; 
//import App from "@/App";


test('basic test', () => {
  expect(1 + 1).toBe(2);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOMClient.createRoot(div).render(<App />);
});