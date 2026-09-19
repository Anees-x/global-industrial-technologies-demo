import { IMG } from './assets';
import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  [
    '01',
    'Automated Beverage Bottling & Capping Line',
    'Beverages / Turnkey Bottling Suite',
    IMG.hero,
    'Complete 6,000 BPH automated liquid filling, rotary capping, wrap-around labeling, and synchronized case packing line for a leading mineral water and juice producer.'
  ],
  [
    '02',
    'High-Viscosity Cosmetic Cream Filling Complex',
    'Cosmetics / Precision Dosing & Sealing',
    IMG.cosmetics,
    'Multi-head servo dosing suite with heated jacketed hoppers, automatic tube sealing, and vision inspection delivering ±0.2% dosing precision.'
  ],
  [
    '03',
    'ISO Class 7 Modular Cleanroom & HVAC System',
    'Cleanroom / Sterile Air Enclosure',
    IMG.cleanroom,
    'Turnkey sterile production environment with HEPA H14 air filtration, positive pressure cascades, and cGMP stainless steel partition walls.'
  ],
  [
    '04',
    'Food Grade Vacuum Packaging & Case Packing',
    'Food / Hygienic Processing & Packing',
    IMG.food,
    'Continuous food packaging line with automated weigh-checking, pouch seal validation, date laser coding, and end-of-line conveyor transfer.'
  ]
];
