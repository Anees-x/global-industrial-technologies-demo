import React, { ReactNode } from 'react';
import { SmoothScroll } from '../common/SmoothScroll';
import { ScrollReset } from '../common/ScrollReset';
import { Progress } from '../common/Progress';
import { SitePreloader } from '../common/SitePreloader';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <>
      <SitePreloader />
      <SmoothScroll />
      <ScrollReset />
      <Progress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
