export type ComponentCategory =
  | 'cpu'
  | 'gpu'
  | 'ram'
  | 'storage'
  | 'motherboard'
  | 'psu'
  | 'case'
  | 'cooler';

export interface PCComponent {
  id: string;
  category: ComponentCategory;
  brand: string;
  name: string;
  priceEur: number;
  perfScore: number; // normalised 0-100
  specs: Record<string, string | number>;
  releaseYear: number;
  imageRef?: string;
}

export interface SpecTier {
  cpuScore: number;
  gpuScore: number;
  ramGb: number;
  storageGb: number;
}

export interface Game {
  id: string;
  title: string;
  releaseYear: number;
  coverRef?: string;
  budgetEur: number;
  targets: { minimum: SpecTier; recommended: SpecTier };
}
