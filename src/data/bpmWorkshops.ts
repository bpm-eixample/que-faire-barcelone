// Ateliers du BPM Bar : liens DIRECTS vers bpmbar.es (plus de passage par GetYourGuide),
// avec un traceur UTM pour retrouver les réservations venues d'ici dans l'admin BpM
// (bookings.source = "quefaireabarcelone", la campagne = l'emplacement du lien).
import type { Lang } from '../i18n/utils';

export type BpmWorkshopId = 'sangria' | 'creative';

const BASE = 'https://www.bpmbar.es';

// Le site BpM sert l'espagnol à la racine, les autres langues sous /fr/ et /en/.
const PATHS: Record<BpmWorkshopId, Record<Lang, string>> = {
  sangria: {
    fr: '/fr/ateliers/atelier-sangria-et-cocktails',
    es: '/talleres/taller-de-sangria-y-cocteles',
    en: '/en/workshops/sangria-and-cocktail-workshop',
  },
  creative: {
    fr: '/fr/ateliers/cocktails-creatifs',
    es: '/talleres/cocteleria-creativa',
    en: '/en/workshops/creative-cocktail-workshop',
  },
};

/** Lien direct et suivi vers un atelier BpM. `placement` = où se trouve le lien (home, activites…). */
export function bpmWorkshopUrl(lang: Lang, id: BpmWorkshopId, placement: string): string {
  const u = new URL(PATHS[id][lang], BASE);
  u.searchParams.set('utm_source', 'quefaireabarcelone');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', placement);
  return u.toString();
}

export interface BpmWorkshop {
  id: BpmWorkshopId;
  image: string;
  priceEur: number;
  durationMin: number;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
}

// L'atelier sangria passe en premier : c'est l'atelier phare du bar.
export const bpmWorkshops: BpmWorkshop[] = [
  {
    id: 'sangria',
    image: '/images/bpm/atelier-sangria.jpg',
    priceEur: 42,
    durationMin: 90,
    title: {
      fr: 'Atelier sangria & cocktails',
      es: 'Taller de sangría y cócteles',
      en: 'Sangria & cocktail workshop',
    },
    summary: {
      fr: "Derrière le bar avec un barman, dans un vrai bar de l'Eixample : sangria, cocktails et tapas. 12 personnes max, tous les jours, en français aussi.",
      es: 'Detrás de la barra con un bartender, en un bar de verdad del Eixample: sangría, cócteles y tapas. Máx. 12 personas, todos los días.',
      en: 'Behind the bar with a bartender, in a real Eixample bar: sangria, cocktails and tapas. 12 people max, every day, in English.',
    },
  },
  {
    id: 'creative',
    image: '/images/bpm/atelier-cocktails-creatifs.jpg',
    priceEur: 56,
    durationMin: 120,
    title: {
      fr: 'Atelier cocktails créatifs',
      es: 'Taller de coctelería creativa',
      en: 'Creative cocktail workshop',
    },
    summary: {
      fr: 'Deux heures pour créer vos propres cocktails, en commençant par une coupe de cava catalan et une tapa. 12 personnes max.',
      es: 'Dos horas para crear tus propios cócteles, empezando con una copa de cava catalán y una tapa. Máx. 12 personas.',
      en: 'Two hours to create your own cocktails, starting with a glass of Catalan cava and a tapa. 12 people max.',
    },
  },
];
