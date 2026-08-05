// Programmes d'affiliation (au-delà de GetYourGuide).
//
// Comment activer un programme :
// 1) Crée un compte sur le programme d'affiliation (c'est toi qui crées le compte).
// 2) Récupère ton identifiant / lien affilié.
// 3) Colle ton identifiant dans AFFILIATE_IDS ci-dessous, OU remplace `base`
//    par ton lien de tracking complet.
//
// Tant qu'un identifiant est vide, le lien pointe vers le site officiel
// (fonctionnel, mais sans commission).

import type { Lang } from '../i18n/utils';

export const AFFILIATE_IDS = {
  booking: '',        // ex. aid=XXXXXXX
  welcomePickups: '', // ton lien/ref Welcome Pickups
  airalo: '',         // ton code de parrainage Airalo
};

export interface AffiliateProgram {
  key: keyof typeof AFFILIATE_IDS;
  emoji: string;
  base: string;
  /** paramètre de tracking à ajouter quand l'ID est renseigné */
  param?: string;
  labels: Record<Lang, { name: string; desc: string }>;
}

export const affiliatePrograms: AffiliateProgram[] = [
  {
    key: 'airalo',
    emoji: '📶',
    base: 'https://www.airalo.com/',
    labels: {
      fr: { name: 'eSIM — rester connecté', desc: 'Internet mobile en Espagne dès l’arrivée, sans frais d’itinérance.' },
      en: { name: 'eSIM — stay connected', desc: 'Mobile data in Spain from arrival, no roaming fees.' },
      es: { name: 'eSIM — conéctate', desc: 'Internet móvil en España desde la llegada, sin itinerancia.' },
    },
  },
  {
    key: 'welcomePickups',
    emoji: '🚕',
    base: 'https://www.welcomepickups.com/barcelona/',
    labels: {
      fr: { name: 'Transfert aéroport', desc: 'Chauffeur privé de l’aéroport à votre logement, prix fixe.' },
      en: { name: 'Airport transfer', desc: 'Private driver from the airport to your stay, fixed price.' },
      es: { name: 'Traslado aeropuerto', desc: 'Chófer privado del aeropuerto a tu alojamiento, precio fijo.' },
    },
  },
  {
    key: 'booking',
    emoji: '🏨',
    base: 'https://www.booking.com/city/es/barcelona.html',
    labels: {
      fr: { name: 'Hôtels & logements', desc: 'Réservez votre hébergement à Barcelone, annulation gratuite.' },
      en: { name: 'Hotels & stays', desc: 'Book your accommodation in Barcelona, free cancellation.' },
      es: { name: 'Hoteles y alojamientos', desc: 'Reserva tu alojamiento en Barcelona, cancelación gratis.' },
    },
  },
];

/** Construit le lien affilié (ajoute l'ID de tracking s'il est renseigné). */
export function affiliateUrl(p: AffiliateProgram): string {
  const id = AFFILIATE_IDS[p.key];
  if (!id) return p.base;
  const sep = p.base.includes('?') ? '&' : '?';
  return p.param ? `${p.base}${sep}${p.param}=${encodeURIComponent(id)}` : p.base;
}

export const AFF_TITLE: Record<Lang, string> = {
  fr: 'Services utiles pour votre voyage',
  en: 'Useful services for your trip',
  es: 'Servicios útiles para tu viaje',
};
export const AFF_CTA: Record<Lang, string> = { fr: 'Voir', en: 'View', es: 'Ver' };
