// Activités payantes affichées via les widgets GetYourGuide.
// Il suffit d'ajouter un identifiant de tour (data-gyg-tour-ids) pour publier une activité.
// L'ID se trouve dans l'URL GetYourGuide : .../...-t1255110/ -> "1255110".

export const GYG_PARTNER_ID = 'CBJWAZL';

/**
 * Ajoute l'ID partenaire affilié aux liens GetYourGuide (suivi des commissions).
 * Laisse les autres URLs inchangées.
 */
export function gygAffiliateUrl(url?: string): string | undefined {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (u.hostname.includes('getyourguide')) {
      u.searchParams.set('partner_id', GYG_PARTNER_ID);
      return u.toString();
    }
  } catch {
    return url;
  }
  return url;
}

export interface PaidActivity {
  tourId: string;
  /** Mettre en avant sur la page d'accueil */
  featured?: boolean;
}

export const paidActivities: PaidActivity[] = [
  { tourId: '1255110', featured: true }, // BPM BAR — atelier sangria & cocktails
  { tourId: '1235740', featured: true }, // BPM BAR — cocktails créatifs avec cava
  { tourId: '50027' },
  { tourId: '53791' },
  { tourId: '398519' },
  { tourId: '913286' },
];
