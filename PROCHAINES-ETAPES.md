# Que Faire à Barcelone — Prochaines étapes

> Rappel de session. Site Astro multilingue (FR/EN/ES), non encore déployé.
> Lancer en local : `cd ~/que-faire-barcelone && export PATH="/opt/homebrew/bin:$PATH" && npm run dev`

## ✅ FAIT
- **Déploiement Netlify + domaine quefaireabarcelone.com** → EN LIGNE sur https://quefaireabarcelone.com

## 🔴 Priorité 1 — À finaliser
- [ ] **Compléter les mentions légales** : remplacer les `[à compléter]` dans `src/pages/[lang]/mentions.astro` (nom éditeur, statut, adresse, e-mail de contact, hébergeur = Netlify).
- [ ] **Notification e-mail du formulaire partenaire** : dans Netlify → Forms → « devenir-partenaire » → Settings → Add notification → Email notification (ton adresse).
- [ ] **Google Search Console** : ajouter le domaine, vérifier, soumettre `https://quefaireabarcelone.com/sitemap-index.xml`.

## 🟠 Priorité 2 — Monétisation (créer les comptes, puis me donner les IDs)

- [ ] **AdSense** (le site doit être DÉPLOYÉ d'abord — AdSense vérifie le site en ligne) : créer le compte → après approbation, coller l'ID éditeur dans `src/data/ads.ts` (`ADSENSE_CLIENT`) + les slots (`AD_SLOTS`), puis mettre l'ID (sans `ca-`) dans `public/ads.txt`. Bandeau de consentement (Consent Mode v2) + ads.txt déjà en place. Emplacements pub déjà codés (mode placeholder tant qu'aucun ID).
- [ ] **Affiliés** : créer les comptes Booking / Welcome Pickups / Airalo → coller les IDs dans `src/data/affiliates.ts` (`AFFILIATE_IDS`).

> Note : la section « Bons plans » a été remplacée par « **Événements** » (plus simple à gérer). Les activités payantes (affiliation GYG) restent dans « Activités à réserver ».

## 🟡 Priorité 3 — Contenu & qualité

- [ ] **Photos** : remplacer les visuels génériques (vélo, hôtel) par tes propres photos → déposer dans `public/images/` (garder les mêmes noms de fichiers). Signal SEO fort en 2026.
- [ ] **Restaurants « Où manger »** : 15 vraies adresses réputées intégrées (Cal Pep, Can Solé, 7 Portes, Cervecería Catalana, The Egg Lab, Gelateria La Palau…). ⚠️ **Vérifier adresses/horaires** avant publication (sources : guides Time Out, Lonely Planet, etc.). Gérer dans `src/content/restaurants/{fr,en,es}/` (champ `type` = filtre).
- [ ] **Brief hebdo — Événements** : ajouter/retirer les événements du moment dans `src/content/evenements/{fr,en,es}/` (un fichier `.md` par événement : titre, `date`, `endDate` optionnelle, `location`, `category`, `url`, `emoji`). Les passés disparaissent tout seuls. (3 exemples en place : Palo Alto, Primavera Sound, Sant Joan — dates à ajuster.)

## 🟢 Ce que Claude peut faire sans toi (à me demander)

- [ ] **Partenaires à la une** (vente directe de visibilité aux commerces locaux) — 4e piste de monétisation, pas encore faite.
- [ ] Nouveaux articles SEO : *Itinéraire Gaudí*, *Vie nocturne*, *Budget week-end*, *Barcelone local*, **Les fêtes mois par mois**.
- [ ] Parité EN/ES de l'article « 5 astuces pour éviter la foule » (existe seulement en FR).
- [ ] Auto-déploiement via GitHub (mises à jour automatiques à chaque modif).

---
*État au dernier travail : 71 pages, blog avec recherche + filtres par catégorie, SEO technique (sitemap, JSON-LD, hreflang), zones pub + affiliés prêts, mentions légales en place.*
