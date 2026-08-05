// Configuration des emplacements publicitaires.
//
// 1) Crée un compte Google AdSense (ou Ezoic) — c'est toi qui crées le compte.
// 2) Une fois approuvé, colle ici ton identifiant éditeur AdSense :
//    ex. "ca-pub-1234567890123456"
// 3) Crée un bloc d'annonce dans AdSense et reporte son "slot" dans AD_SLOTS ci-dessous.
//
// Tant que ADSENSE_CLIENT est vide, les emplacements affichent un simple
// placeholder discret (aucune pub chargée, aucun script externe).

export const ADSENSE_CLIENT = ''; // ex. 'ca-pub-XXXXXXXXXXXXXXXX'

// Identifiants de blocs d'annonces (data-ad-slot) par emplacement.
export const AD_SLOTS = {
  inArticle: '', // ex. '1234567890'
  listTop: '',
} as const;

export const adsEnabled = ADSENSE_CLIENT.trim().length > 0;
