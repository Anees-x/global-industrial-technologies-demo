import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

function unlockSite() {
  document.body.classList.remove('preloader-active', 'preloader-exiting');
  document.body.classList.add('preloader-complete', 'nav-settled');
}

unlockSite();
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
unlockSite();
