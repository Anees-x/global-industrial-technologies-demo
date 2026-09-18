import { IMG } from './assets';
import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  { id: '01', title: 'Understand Your Needs', short: 'We first understand what you want to produce, your required capacity, budget, space, and technical requirements.', img: IMG.engineer },
  { id: '02', title: 'Find the Right Machinery', short: 'We help you choose the right machines and equipment for your production needs and source them from reliable manufacturers.', img: IMG.productFilling },
  { id: '03', title: 'Check & Test Before Shipment', short: 'We inspect the machines and, when required, conduct Factory Acceptance Testing (FAT) on your behalf to make sure everything is working as expected before it leaves the factory.', img: IMG.commissioning },
  { id: '04', title: 'Shipping & Delivery', short: 'We take care of transportation, freight forwarding, documentation, customs coordination, and delivery to your location.', img: IMG.packaging },
  { id: '05', title: 'Installation & Setup', short: 'Our technical team installs the machinery, connects everything properly, and gets the equipment ready for operation.', img: IMG.productConveyor },
  { id: '06', title: 'Testing & Commissioning', short: 'We test the complete system and make sure the machinery is running properly and meeting the required performance.', img: IMG.commissioning },
  { id: '07', title: 'Staff Training', short: 'We train your operators, engineers, and maintenance team so they know how to safely operate and maintain the equipment.', img: IMG.engineer },
  { id: '08', title: 'Calibration & Validation', short: 'Where required, we handle calibration, testing, qualification, and validation to make sure the equipment meets the required standards.', img: IMG.cleanroom },
  { id: '09', title: 'Ongoing Support', short: 'After installation, we continue to support you with maintenance, troubleshooting, repairs, spare parts, and technical assistance.', img: IMG.spareParts },
  { id: '10', title: 'Complete Turnkey Projects', short: 'If you need more than individual machines, we can manage the complete project — from planning and machinery selection to installation and a fully operational production facility.', img: IMG.hero }
];
