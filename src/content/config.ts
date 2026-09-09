import { defineCollection, z } from 'astro:content';

const langField = z.enum(['fr', 'en', 'es']);

const activites = defineCollection({
  type: 'content',
  schema: z.object({
    lang: langField,
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    area: z.string(),
    duration: z.string().optional(),
    price: z.string().optional(),
    bookingUrl: z.string().optional(),
    free: z.boolean().default(true),
    image: z.string().optional(),
    emoji: z.string().default('📍'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    /** balise <title> sur mesure (sans suffixe du site) — pour les pages travaillées au CTR */
    seoTitle: z.string().optional(),
    /** meta description sur mesure, si différente du `summary` affiché sur la page */
    seoDescription: z.string().optional(),
  }),
});

const evenements = defineCollection({
  type: 'content',
  schema: z.object({
    lang: langField,
    title: z.string(),
    summary: z.string(),
    /** date de début (obligatoire) */
    date: z.coerce.date(),
    /** date de fin pour les événements sur plusieurs jours (optionnel) */
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    category: z.string().optional(),
    /** lien officiel / billetterie (optionnel) */
    url: z.string().optional(),
    image: z.string().optional(),
    emoji: z.string().default('🎉'),
  }),
});

const partenaires = defineCollection({
  type: 'content',
  schema: z.object({
    lang: langField,
    name: z.string(),
    category: z.string(),
    summary: z.string(),
    url: z.string().optional(),
    image: z.string().optional(),
    emoji: z.string().default('🤝'),
    order: z.number().default(99),
  }),
});

const restaurants = defineCollection({
  type: 'content',
  schema: z.object({
    lang: langField,
    name: z.string(),
    summary: z.string(),
    /** type de cuisine — sert de filtre (Tapas, Paella, Snack, Glace…) */
    type: z.string(),
    area: z.string().optional(),
    /** gamme de prix : €, €€, €€€ */
    price: z.string().optional(),
    url: z.string().optional(),
    image: z.string().optional(),
    emoji: z.string().default('🍽️'),
    order: z.number().default(99),
  }),
});

const nightlife = defineCollection({
  type: 'content',
  schema: z.object({
    lang: langField,
    name: z.string(),
    summary: z.string(),
    /** type — sert de filtre (Bar à cocktails, Discothèque, Rooftop, Live music…) */
    type: z.string(),
    area: z.string().optional(),
    price: z.string().optional(),
    url: z.string().optional(),
    image: z.string().optional(),
    emoji: z.string().default('🍸'),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    lang: langField,
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string().default('La rédaction'),
    emoji: z.string().default('📝'),
    tags: z.array(z.string()).default([]),
    /** identifiant commun aux versions FR/EN/ES d'un même article (pour la bascule de langue) */
    key: z.string().optional(),
    /** balise <title> sur mesure (sans suffixe du site) — pour les pages travaillées au CTR */
    seoTitle: z.string().optional(),
    /** meta description sur mesure, si différente du `summary` affiché sur la page */
    seoDescription: z.string().optional(),
  }),
});

export const collections = { activites, evenements, partenaires, restaurants, nightlife, blog };
