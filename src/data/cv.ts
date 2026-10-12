import type { Copy } from './timeline';

export type CvJob = {
  years: string;
  title: Copy;
  org: Copy;
  points: Copy[];
};

export type CvDoc = {
  role: string;
  profile: string[];
  resultsTitle: string;
  results: string[];
  pathTitle: string;
  jobs: { years: string; title: string; org: string; points: string[] }[];
  practiceTitle: string;
  practice: string;
  studiesTitle: string;
  studies: string[];
  languagesTitle: string;
  languages: string;
  printLabel: string;
};

const jobs: CvJob[] = [
  {
    years: '2020 —',
    title: { fr: 'Ingénieur indépendant', en: 'Independent engineer' },
    org: { fr: 'Noematic EURL, Avrillé', en: 'Noematic EURL, Avrillé' },
    points: [
      {
        fr: 'Contrats d’ingénierie via la société unipersonnelle. Les produits avancent en parallèle.',
        en: 'Engineering contracts through the single-member company. Products move in parallel.',
      },
      {
        fr: 'Media Cataloger, catalogue local de disques (Go, Fyne, Badger). Index documentaire Bleve pour un assistant privé.',
        en: 'Media Cataloger, a local disk catalog (Go, Fyne, Badger). A Bleve document index for a private assistant.',
      },
    ],
  },
  {
    years: 'sep. — déc. 2025',
    title: { fr: 'Ingénieur backend', en: 'Backend engineer' },
    org: { fr: 'LivingPackets, Sainte-Luce-sur-Loire', en: 'LivingPackets, Sainte-Luce-sur-Loire' },
    points: [
      {
        fr: 'Services Go en production, colis connectés. Une dizaine de bugs corrigés. Tracing passé d’Instana à OpenTelemetry, pour Datadog.',
        en: 'Production Go services, connected parcels. About ten bugs fixed. Tracing moved from Instana to OpenTelemetry, for Datadog.',
      },
    ],
  },
  {
    years: 'avr. — juil. 2025',
    title: { fr: 'Ingénieur backend senior', en: 'Senior backend engineer' },
    org: { fr: 'Alluvial Finance, via Odiin', en: 'Alluvial Finance, via Odiin' },
    points: [
      {
        fr: 'Cache Go devant des nœuds Ethereum, essayé hors production : taux de hit de 50 % à 90 % selon la méthode RPC. Ébauche d’un SMS v2, non mise en production.',
        en: 'Go cache in front of Ethereum nodes, tested outside production: hit rate from 50% to 90% depending on the RPC method. An SMS v2 sketch that did not ship.',
      },
    ],
  },
  {
    years: '2021 — 2024',
    title: { fr: 'Ingénieur logiciel senior', en: 'Senior software engineer' },
    org: { fr: 'ConsenSys / Infura', en: 'ConsenSys / Infura' },
    points: [
      {
        fr: 'Flottes de nœuds partagées entre trois ingénieurs (Celo, Base, Ethereum, Linea). Astreinte, k6, dimensionnement EKS, Karpenter, instances spot.',
        en: 'Node fleets shared across three engineers (Celo, Base, Ethereum, Linea). On-call, k6, EKS sizing, Karpenter, spot instances.',
      },
      {
        fr: 'GoQuorum : transactions privées, alignement Besu, période de bloc QBFT réglable.',
        en: 'GoQuorum: private transactions, Besu alignment, a configurable QBFT block period.',
      },
    ],
  },
  {
    years: '2018 — 2021',
    title: { fr: 'Ingénieur backend', en: 'Backend engineer' },
    org: { fr: 'Objenious, Bouygues Telecom', en: 'Objenious, Bouygues Telecom' },
    points: [
      {
        fr: 'Requêtes carte de plus de 5 s à environ 150 ms. Microservices Go sur GKE, Kafka, Pub/Sub. Cassandra migrée sans coupure.',
        en: 'Map queries from over 5 s to about 150 ms. Go microservices on GKE, Kafka, Pub/Sub. Cassandra moved with no downtime.',
      },
    ],
  },
  {
    years: '2007 — 2018',
    title: { fr: 'Expériences antérieures', en: 'Earlier work' },
    org: {
      fr: 'Accengage, MindLytiX, INRIA, Bluwan, InfoVista, Avisto',
      en: 'Accengage, MindLytiX, INRIA, Bluwan, InfoVista, Avisto',
    },
    points: [
      {
        fr: 'Ingestion Go sur Kubernetes, pipeline Java basse latence, services dynamiques à l’INRIA, supervision réseau, instruments météo.',
        en: 'Go ingestion on Kubernetes, a low-latency Java pipeline, dynamic services at INRIA, network monitoring, weather instruments.',
      },
    ],
  },
];

export const cv: Record<'fr' | 'en', CvDoc> = {
  fr: {
    role: 'Ingénieur senior — systèmes distribués, Go',
    profile: [
      'Ingénieur logiciel, 19 ans de pratique. Systèmes distribués en production : services Go, chemins de données, Kubernetes. Astreinte, essais de charge, incidents. Équipes distantes, en anglais.',
      'Avrillé (Angers). Missions à temps partagé, distant en France. Enseignement en parallèle en 2026 et 2027 : environ 270 h prévues à My Digital School / ESPL. Deux jours déjà donnés à l’ESÉO, sécurité applicative.',
    ],
    resultsTitle: 'Trois résultats',
    results: [
      'Objenious : requêtes carte de plus de 5 s à environ 150 ms, services Go sur Kafka et Pub/Sub.',
      'ConsenSys Infura : astreinte, essais de charge et capacité des flottes de nœuds couvertes, partagées entre trois ingénieurs.',
      'Indexation Go, à côté : Media Cataloger (index local multithread) et Bleve (index documentaire).',
    ],
    pathTitle: 'Parcours',
    jobs: jobs.map((job) => ({
      years: job.years,
      title: job.title.fr,
      org: job.org.fr,
      points: job.points.map((point) => point.fr),
    })),
    practiceTitle: 'Pratique',
    practice:
      'Go, Java, Kubernetes, PostgreSQL, Kafka, Pub/Sub, OpenTelemetry, Cassandra, AWS, GCP. Astreinte, incidents, essais de charge.',
    studiesTitle: 'Études',
    studies: [
      'Master d’informatique, interfaces tangibles — université de Sherbrooke, 2007.',
      'Diplôme d’ingénieur, électronique et informatique — ESÉO, Angers, 2006.',
    ],
    languagesTitle: 'Langues',
    languages: 'Français, langue maternelle. Anglais, C1 technique, B2 à l’oral.',
    printLabel: 'Imprimer',
  },
  en: {
    role: 'Senior engineer — distributed systems, Go',
    profile: [
      'Software engineer, 19 years. Distributed systems in production: Go services, data paths, Kubernetes. On-call, load testing, incidents. Remote teams, in English.',
      'Avrillé (Angers). Shared-time missions, remote in France. Teaching alongside, in 2026 and 2027: about 270 hours scheduled at My Digital School / ESPL. Two days already delivered at ESÉO, application security.',
    ],
    resultsTitle: 'Three results',
    results: [
      'Objenious: map queries from over 5 s to about 150 ms, Go services on Kafka and Pub/Sub.',
      'ConsenSys Infura: on-call, load testing, and capacity for the node fleets covered, shared across three engineers.',
      'Go indexing, on the side: Media Cataloger (multi-threaded local index) and Bleve (document index).',
    ],
    pathTitle: 'Path',
    jobs: jobs.map((job) => ({
      years: job.years,
      title: job.title.en,
      org: job.org.en,
      points: job.points.map((point) => point.en),
    })),
    practiceTitle: 'Practice',
    practice:
      'Go, Java, Kubernetes, PostgreSQL, Kafka, Pub/Sub, OpenTelemetry, Cassandra, AWS, GCP. On-call, incidents, load testing.',
    studiesTitle: 'Studies',
    studies: [
      'M.Sc. Computer Science, tangible interfaces — Université de Sherbrooke, 2007.',
      'Engineering degree, electronics and computer science — ESÉO, Angers, 2006.',
    ],
    languagesTitle: 'Languages',
    languages: 'French, native. English, C1 technical, B2 spoken.',
    printLabel: 'Print',
  },
};
