// JOTEAMS : activités de groupe / team building sur mesure à Barcelone (partenaire).
// Lien direct vers joteams.com avec traceur UTM, comme pour les ateliers BpM.
import type { Lang } from '../i18n/utils';

const PATHS: Record<Lang, string> = {
  fr: '/fr/nos-activites-de-teambuilding-a-barcelone/',
  es: '/es/actividades-de-teambuilding-en-barcelona/',
  en: '/our-teambuilding-activities-in-barcelona/',
};

/** Lien direct et suivi vers les activités JOTEAMS. `placement` = où se trouve le lien. */
export function joteamsUrl(lang: Lang, placement: string): string {
  const u = new URL(PATHS[lang], 'https://joteams.com');
  u.searchParams.set('utm_source', 'quefaireabarcelone');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', placement);
  return u.toString();
}

export const joteams = {
  image: '/images/joteams/joteams-lancer-de-hache.jpg',
  badge: {
    fr: 'Groupes · JOTEAMS',
    es: 'Grupos · JOTEAMS',
    en: 'Groups · JOTEAMS',
  } as Record<Lang, string>,
  title: {
    fr: 'Olympiades & team building sur mesure',
    es: 'Olimpiadas y team building a medida',
    en: 'Custom team games & team building',
  } as Record<Lang, string>,
  meta: {
    fr: ['🏆 Compétition par équipes', '🎯 30+ jeux au choix'],
    es: ['🏆 Competición por equipos', '🎯 Más de 30 juegos'],
    en: ['🏆 Team competition', '🎯 30+ games to pick from'],
  } as Record<Lang, string[]>,
  summary: {
    fr: "Lancer de hache, bubble foot, beach-volley, karting, Mario Kart… JOTEAMS compose votre compétition sur mesure : vous choisissez les jeux et la durée, ils s'occupent du reste. Idéal EVG/EVJF et séminaires.",
    es: 'Lanzamiento de hacha, bubble football, beach vóley, karting, Mario Kart… JOTEAMS monta tu competición a medida: eliges los juegos y la duración, ellos se ocupan del resto. Ideal para despedidas y empresas.',
    en: 'Axe throwing, bubble football, beach volleyball, karting, Mario Kart… JOTEAMS builds your own custom competition: you pick the games and the length, they handle the rest. Great for stag/hen parties and company events.',
  } as Record<Lang, string>,
  cta: {
    fr: 'Composer sa compétition',
    es: 'Montar mi competición',
    en: 'Build your competition',
  } as Record<Lang, string>,
};
