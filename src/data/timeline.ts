import type { LensId } from './angles';

export type Copy = { fr: string; en: string };

export type Entry = {
  id: string;
  years: string;
  title: Copy;
  org: Copy;
  end: number;
  ongoing?: boolean;
  weight: Record<LensId, number>;
  detail?: Partial<Record<LensId, Copy>>;
};

export const timeline: Entry[] = [
  {
    id: 'noematic',
    years: '2020 —',
    title: { fr: 'Ingénieur indépendant', en: 'Independent engineer' },
    org: { fr: 'Noematic EURL, Avrillé', en: 'Noematic EURL, Avrillé' },
    end: 2026,
    ongoing: true,
    weight: { mission: 3, produit: 3, editions: 2, portfolio: 2 },
    detail: {
      mission: {
        fr: 'Société unipersonnelle des contrats. Les outils avancent quand les missions laissent du temps.',
        en: 'Single-member company for the contracts. The tools move forward when missions leave time.',
      },
      produit: {
        fr: 'Media Cataloger, index local en Go, Fyne et Badger. Un index documentaire Bleve pour un assistant privé.',
        en: 'Media Cataloger, a local index in Go, Fyne, and Badger. A Bleve document index for a private assistant.',
      },
      editions: {
        fr: 'L’éditeur des cahiers, et la structure à côté de l’enseignement.',
        en: 'Publisher of the cahiers, and the structure beside the teaching.',
      },
      portfolio: {
        fr: 'La structure qui porte les missions, Qi et les cahiers.',
        en: 'The structure behind the missions, Qi, and the cahiers.',
      },
    },
  },
  {
    id: 'espl',
    years: '2026 — 2027',
    title: { fr: 'Enseignement', en: 'Teaching' },
    org: { fr: 'My Digital School / ESPL, Angers', en: 'My Digital School / ESPL, Angers' },
    end: 2027,
    ongoing: true,
    weight: { mission: 1, produit: 0, editions: 3, portfolio: 1 },
    detail: {
      mission: {
        fr: 'Environ 270 h prévues, en parallèle des missions.',
        en: 'About 270 hours scheduled, alongside the missions.',
      },
    },
  },
  {
    id: 'eseo-teach',
    years: '2026',
    title: { fr: 'Intervenant', en: 'Guest lecturer' },
    org: { fr: 'ESÉO, Angers', en: 'ESÉO, Angers' },
    end: 2026,
    weight: { mission: 1, produit: 0, editions: 3, portfolio: 1 },
  },
  {
    id: 'livingpackets',
    years: '2025',
    title: { fr: 'Ingénieur backend', en: 'Backend engineer' },
    org: {
      fr: 'LivingPackets, Sainte-Luce-sur-Loire',
      en: 'LivingPackets, Sainte-Luce-sur-Loire',
    },
    end: 2025,
    weight: { mission: 3, produit: 1, editions: 0, portfolio: 1 },
    detail: {
      mission: {
        fr: 'Colis connectés, trois mois sur site. Une dizaine de bugs corrigés sur les services Go. Tracing passé d’Instana à OpenTelemetry, pour Datadog. Documentation du backend pour une petite équipe.',
        en: 'Connected parcels, three months on site. About ten bugs fixed on the production Go services. Tracing moved from Instana to OpenTelemetry, for Datadog. Backend notes for a small team.',
      },
    },
  },
  {
    id: 'alluvial',
    years: '2025',
    title: { fr: 'Ingénieur backend senior', en: 'Senior backend engineer' },
    org: {
      fr: 'Alluvial Finance, via Odiin, distant',
      en: 'Alluvial Finance, via Odiin, remote',
    },
    end: 2025,
    weight: { mission: 3, produit: 1, editions: 0, portfolio: 1 },
    detail: {
      mission: {
        fr: 'Staking liquide pour des institutionnels. Cache Go devant des nœuds Ethereum, essayé hors production : le taux de hit va de 50 % à 90 % selon la méthode RPC. Ébauche d’un SMS v2 plus simple, moins dépendant des données on-chain. L’ébauche n’est pas entrée en production.',
        en: 'Liquid staking for institutions. A Go cache in front of Ethereum nodes, tested outside production: hit rate from 50% to 90% depending on the RPC method. A simpler SMS v2 sketch, less tied to on-chain data. The sketch did not go to production.',
      },
    },
  },
  {
    id: 'infura',
    years: '2021 — 2024',
    title: { fr: 'Ingénieur logiciel senior', en: 'Senior software engineer' },
    org: { fr: 'ConsenSys / Infura, distant', en: 'ConsenSys / Infura, remote' },
    end: 2024,
    weight: { mission: 3, produit: 1, editions: 0, portfolio: 2 },
    detail: {
      mission: {
        fr: 'Flottes de nœuds partagées entre trois ingénieurs : Celo, Base, Ethereum, Linea. Astreinte, essais de charge avec k6, dimensionnement EKS via Karpenter et instances spot. GoQuorum : transactions privées, alignement Besu, période de bloc QBFT réglable.',
        en: 'Node fleets shared across three engineers: Celo, Base, Ethereum, Linea. On-call, k6 load tests, EKS sizing through Karpenter and spot instances. GoQuorum: private transactions, Besu alignment, a configurable QBFT block period.',
      },
      portfolio: {
        fr: 'Trois ans et sept mois sur l’infrastructure de nœuds Ethereum. Le dimensionnement et l’astreinte, pas une page produit.',
        en: 'Three years and seven months on Ethereum node infrastructure. Sizing and on-call, not a product page.',
      },
    },
  },
  {
    id: 'objenious',
    years: '2018 — 2021',
    title: { fr: 'Ingénieur backend', en: 'Backend engineer' },
    org: {
      fr: 'Objenious, Bouygues Telecom, via NewCo',
      en: 'Objenious, Bouygues Telecom, via NewCo',
    },
    end: 2021,
    weight: { mission: 3, produit: 1, editions: 0, portfolio: 2 },
    detail: {
      mission: {
        fr: 'IoT LoRaWAN, géolocalisation d’objets. Microservices Go sur GKE, Pub/Sub et Kafka. Cassandra migrée sans coupure. Export, PDF et facturation industrialisés via Kafka.',
        en: 'LoRaWAN IoT, object geolocation. Go microservices on GKE, Pub/Sub, and Kafka. Cassandra moved with no downtime. Export, PDFs, and billing industrialized over Kafka.',
      },
      portfolio: {
        fr: 'Le chemin de données d’un opérateur IoT, du message radio jusqu’à la carte.',
        en: 'The data path of an IoT operator, from the radio message to the map.',
      },
    },
  },
  {
    id: 'earlier',
    years: '2007 — 2018',
    title: { fr: 'Expériences antérieures', en: 'Earlier work' },
    org: {
      fr: 'Accengage, MindLytiX, INRIA, Bluwan, InfoVista, Avisto',
      en: 'Accengage, MindLytiX, INRIA, Bluwan, InfoVista, Avisto',
    },
    end: 2018,
    weight: { mission: 2, produit: 0, editions: 0, portfolio: 1 },
    detail: {
      mission: {
        fr: 'Accengage (aujourd’hui Airship), ingestion Go sur Kubernetes. MindLytiX, pipeline Java basse latence. INRIA, architecture de services dynamique. Bluwan et InfoVista, supervision réseau. Avisto, instruments météo et NMS.',
        en: 'Accengage (now Airship), Go ingestion on Kubernetes. MindLytiX, a low-latency Java pipeline. INRIA, dynamic service architecture. Bluwan and InfoVista, network monitoring. Avisto, weather instruments and an NMS.',
      },
    },
  },
  {
    id: 'studies',
    years: '2006 — 2007',
    title: { fr: 'Études', en: 'Studies' },
    org: { fr: 'ESÉO, puis Sherbrooke', en: 'ESÉO, then Sherbrooke' },
    end: 2007,
    weight: { mission: 2, produit: 0, editions: 2, portfolio: 2 },
    detail: {
      mission: {
        fr: 'Diplôme d’ingénieur, électronique et informatique, ESÉO, 2006. Master d’informatique, interfaces tangibles, université de Sherbrooke, 2007.',
        en: 'Engineering degree, electronics and computer science, ESÉO, 2006. M.Sc. in computer science, tangible interfaces, Université de Sherbrooke, 2007.',
      },
      editions: {
        fr: 'ESÉO à Angers, puis un master à Sherbrooke sur les interfaces tangibles.',
        en: 'ESÉO in Angers, then a master’s at Sherbrooke on tangible interfaces.',
      },
      portfolio: {
        fr: 'Le diplôme d’ingénieur, puis les interfaces que l’on touche.',
        en: 'The engineering degree, then interfaces you can touch.',
      },
    },
  },
];

export function entriesFor(lens: LensId): { open: Entry[]; quiet: Entry[] } {
  const ranked = timeline
    .filter((entry) => entry.weight[lens] > 0)
    .slice()
    .sort((a, b) => {
      if (Boolean(a.ongoing) !== Boolean(b.ongoing)) return a.ongoing ? -1 : 1;
      return b.end - a.end;
    });
  return {
    open: ranked.filter((entry) => entry.weight[lens] >= 2),
    quiet: ranked.filter((entry) => entry.weight[lens] === 1),
  };
}
