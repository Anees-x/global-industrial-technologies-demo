import React from 'react';
import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './components/common/PageTransition';
import { TranslationBridge } from './components/common/TranslationBridge';
import { Shell } from './components/layout/Shell';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { Industries } from './pages/Industries';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Catalog } from './pages/Catalog';

function AnimatedRoutes() {
  const location = useLocation();

  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/e-catalog', element: <Catalog /> },
    { path: '/services', element: <Services /> },
    { path: '/solutions', element: <Solutions /> },
    { path: '/industries', element: <Industries /> },
    { path: '/projects', element: <Projects /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      {element && (
        <PageTransition key={location.pathname}>
          {element}
        </PageTransition>
      )}
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <TranslationBridge />
      <Shell>
        <AnimatedRoutes />
      </Shell>
    </BrowserRouter>
  );
}
