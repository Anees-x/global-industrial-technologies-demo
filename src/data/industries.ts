import { IMG } from './assets';
import type { IndustryItem } from '../types';

export const industries: IndustryItem[] = [
  { id: '01', title: 'Food', copy: 'Processing, filling, packaging and handling equipment for food production environments.', img: IMG.food, scope: ['Filling systems', 'Line integration', 'Packaging automation', 'Hygienic handling'] },
  { id: '02', title: 'Beverages', copy: 'Bottle filling, capping, labelling and connected production-line equipment for beverage operations.', img: IMG.beverage, scope: ['Rotary fillers', 'Capping machines', 'Labelling systems', 'Conveyor integration'] },
  { id: '03', title: 'Cosmetics', copy: 'Mixing, filling, capping, labelling and packaging systems for cosmetic products.', img: IMG.cosmetics, scope: ['Cream & liquid filling', 'Capping & sealing', 'Precision labelling', 'Cosmetic packaging'] },
  { id: '04', title: 'Packaging', copy: 'Primary and secondary packaging machinery with conveying, integration and automation.', img: IMG.packaging, scope: ['Form-fill-seal formats', 'Cartoning & case packing', 'End-of-line systems', 'Palletizing & transfer'] }
];
