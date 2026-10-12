export type Lens = 'home' | 'mission' | 'produit' | 'editions' | 'portfolio';

export type LensId = Exclude<Lens, 'home'>;

export const LENS_IDS: LensId[] = ['mission', 'produit', 'editions', 'portfolio'];
