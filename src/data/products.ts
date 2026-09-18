import { IMG } from './assets';
import type { ProductItem } from '../types';

export const products: ProductItem[] = [
  { id: '01', name: 'Liquid Filling System', type: 'Filling', img: IMG.productFilling, specs: ['5–5,000 ml range', 'Up to 6,000 bottles/hr', 'Piston / flow-meter dosing'] },
  { id: '02', name: 'Rotary Capping Machine', type: 'Capping', img: IMG.productCapping, specs: ['Screw & ROPP closures', '6–18 head configuration', 'Servo torque control'] },
  { id: '03', name: 'Automatic Labelling Line', type: 'Labelling', img: IMG.productLabelling, specs: ['Wrap-around / front-back', 'Round & flat containers', 'Vision-ready inspection'] },
  { id: '04', name: 'Powder Processing Unit', type: 'Processing', img: IMG.productPowder, specs: ['Batch mixing & handling', 'Hygienic contact surfaces', 'Dust-controlled transfer'] },
  { id: '05', name: 'Pouch Packaging System', type: 'Packaging', img: IMG.productPouch, specs: ['Form-fill-seal formats', 'Weighing & dosing options', 'Date coding integration'] },
  { id: '06', name: 'Conveyor Integration', type: 'Material handling', img: IMG.productConveyor, specs: ['Modular line layouts', 'Speed-synchronised drives', 'Machine-to-machine transfer'] }
];
