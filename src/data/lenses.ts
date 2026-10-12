import type { Lens, LensId } from './angles';
import { person } from './person';
import type { Copy } from './timeline';

export type ShelfItem = {
  name: string;
  text: Copy;
  href?: string;
};

export type Shelf = {
  id: string;
  title: Copy;
  items: ShelfItem[];
};

export type Door = {
  href: string;
  kicker: string;
  label: Copy;
};

export type LensCopy = {
  id: LensId;
  href: string;
  label: Copy;
  sentence: Copy;
  proofs: Copy[];
  door?: Door;
  skills?: Copy;
  line?: { quote: Copy; source: Copy };
  shelves?: Shelf[];
  marks?: { years: string; text: Copy }[];
};

const qi = (slug: string) => `${person.qi}/${slug}`;

export const lenses: Record<LensId, LensCopy> = {
  mission: {
    id: 'mission',
    href: '/mission',
    label: { fr: 'Mission', en: 'Mission' },
    sentence: {
      fr: 'Ingénieur, systèmes distribués, Go. Missions à temps partagé, depuis Angers ou à distance.',
      en: 'Engineer, distributed systems, Go. Shared-time missions, from Angers or remote.',
    },
    proofs: [
      {
        fr: 'Objenious. Les requêtes d’une carte passent de plus de 5 s à environ 150 ms. Services Go sur Kafka et Pub/Sub.',
        en: 'Objenious. Map queries go from over 5 s to about 150 ms. Go services on Kafka and Pub/Sub.',
      },
      {
        fr: 'ConsenSys Infura. Astreinte, essais de charge et dimensionnement des flottes de nœuds couvertes, partagées entre trois ingénieurs.',
        en: 'ConsenSys Infura. On-call, load testing, and capacity for the node fleets I covered, shared across three engineers.',
      },
      {
        fr: 'À côté. Media Cataloger, index local multithread. Bleve, index et requêtes pour un assistant privé.',
        en: 'On the side. Media Cataloger, a multi-threaded local index. Bleve, a document index and query path for a private assistant.',
      },
    ],
    skills: {
      fr: 'Go, Java, Kubernetes, PostgreSQL, Kafka, OpenTelemetry. Astreinte, incidents, essais de charge.',
      en: 'Go, Java, Kubernetes, PostgreSQL, Kafka, OpenTelemetry. On-call, incidents, load testing.',
    },
    door: {
      href: person.noematic,
      kicker: 'noematic.eu',
      label: { fr: 'Les missions', en: 'The missions' },
    },
  },
  produit: {
    id: 'produit',
    href: '/produit',
    label: { fr: 'Produit', en: 'Product' },
    sentence: {
      fr: 'Des outils qui restent sur la machine. Qi les rassemble.',
      en: 'Tools that stay on the machine. Qi collects them.',
    },
    proofs: [
      {
        fr: 'Media Cataloger. Un catalogue local des disques, y compris quand ils sont débranchés. Go, Fyne, Badger. La 0.0.1 est gratuite, limitée à un disque. La 2 est en bêta.',
        en: 'Media Cataloger. A local catalog of disks, including volumes that are unplugged. Go, Fyne, Badger. 0.0.1 is free, limited to one disk. 2 is in beta.',
      },
      {
        fr: 'Bleve. Un index documentaire et ses requêtes, pour un assistant qui ne sort pas de la machine.',
        en: 'Bleve. A document index and its queries, for an assistant that does not leave the machine.',
      },
      {
        fr: 'Qi publie aussi les jeux et les petits outils : Air Fireman, Sheep Dog, PugDB, WatchNoCode.',
        en: 'Qi also publishes the games and the smaller tools: Air Fireman, Sheep Dog, PugDB, WatchNoCode.',
      },
    ],
    shelves: [
      {
        id: 'catalog',
        title: { fr: 'Catalogue', en: 'Catalog' },
        items: [
          {
            name: 'Media Cataloger 2',
            href: qi('media-cataloger-2'),
            text: {
              fr: 'Retrouver un dossier sur un disque retourné dans le tiroir.',
              en: 'Find a folder on a disk that is back in the drawer.',
            },
          },
          {
            name: 'Media Cataloger',
            href: qi('media-cataloger'),
            text: {
              fr: 'Téléchargement gratuit, un disque. Windows, Linux, Mac Intel.',
              en: 'Free download, one disk. Windows, Linux, Intel Mac.',
            },
          },
        ],
      },
      {
        id: 'tools',
        title: { fr: 'Outils', en: 'Tools' },
        items: [
          {
            name: 'PugDB',
            href: qi('pugdb'),
            text: {
              fr: 'LSM en Rust, embarquable. Les données sont encore là après redémarrage.',
              en: 'Embeddable Rust LSM. The data is still there after a restart.',
            },
          },
          {
            name: 'AI RAG Agent',
            href: qi('rag-agent'),
            text: {
              fr: 'Recherche hybride chez vous, BM25 et vecteurs.',
              en: 'Self-hosted hybrid search, BM25 and vectors.',
            },
          },
          {
            name: 'ku',
            href: qi('ku'),
            text: {
              fr: 'TUI d’administration : htop, df, ncdu.',
              en: 'Sysadmin TUI: htop, df, ncdu.',
            },
          },
          {
            name: 'WatchNoCode',
            href: qi('watchnocode'),
            text: {
              fr: 'Erreurs JS et Core Web Vitals pour les outils no-code.',
              en: 'JS errors and Core Web Vitals for no-code builders.',
            },
          },
          {
            name: 'Taurus',
            href: qi('taurus'),
            text: {
              fr: 'Lecteur pour sites zippés et archives WACZ.',
              en: 'Desktop player for zipped sites and WACZ archives.',
            },
          },
          {
            name: 'proqcm',
            href: qi('proqcm'),
            text: {
              fr: 'QCM en markdown, pour Socrative, le papier et git.',
              en: 'Markdown quizzes for Socrative, paper, and git.',
            },
          },
        ],
      },
      {
        id: 'games',
        title: { fr: 'Jeux', en: 'Games' },
        items: [
          {
            name: 'Air Fireman',
            href: qi('air-fireman'),
            text: {
              fr: 'Le pilote qui éteint les feux de forêt.',
              en: 'The pilot who puts out forest fires.',
            },
          },
          {
            name: 'Sheep Dog',
            href: qi('sheep-dog'),
            text: {
              fr: 'Mener le troupeau, fermer la barrière, courir après les étoiles.',
              en: 'Herd the flock, close the gate, chase the stars.',
            },
          },
          {
            name: 'Cozyplanes',
            href: qi('cozyplanes'),
            text: {
              fr: 'Le trafic aérien dessiné au doigt, un aéroport à la fois.',
              en: 'Finger-drawn air traffic, one airport at a time.',
            },
          },
          {
            name: 'Comptoir',
            href: qi('comptoir'),
            text: {
              fr: 'RPG urbain, une fois par jour, au terminal ou en BBS.',
              en: 'Once-a-day city RPG, terminal or BBS.',
            },
          },
        ],
      },
      {
        id: 'also',
        title: { fr: 'Aussi', en: 'Also' },
        items: [
          {
            name: 'Living Memoirs',
            href: qi('living-memoirs'),
            text: {
              fr: 'Guider des entretiens de famille, puis parler avec la biographie.',
              en: 'Guide family interviews, then talk with the biography.',
            },
          },
          {
            name: 'Ciblo',
            href: qi('ciblo'),
            text: {
              fr: 'Un marché inversé : publier un besoin, recevoir des offres.',
              en: 'An inverted marketplace: post a need, get relevant offers.',
            },
          },
        ],
      },
    ],
    door: {
      href: person.qi,
      kicker: 'qi.noematic.eu',
      label: { fr: 'L’étagère', en: 'The shelf' },
    },
  },
  editions: {
    id: 'editions',
    href: '/editions',
    label: { fr: 'Éditions', en: 'Editions' },
    sentence: {
      fr: 'J’enseigne la modélisation et le logiciel. Les cahiers portent la méthode.',
      en: 'I teach modeling and software. The cahiers carry the method.',
    },
    proofs: [
      {
        fr: 'My Digital School / ESPL. Environ 270 h prévues en 2026 et 2027. BTS CIEL, 3e année de bachelor, master 2.',
        en: 'My Digital School / ESPL. About 270 hours scheduled across 2026 and 2027. BTS CIEL, bachelor year 3, master year 2.',
      },
      {
        fr: 'ESÉO. Deux jours déjà donnés, sécurité applicative, en mars et avril 2026.',
        en: 'ESÉO. Two days already delivered, application security, in March and April 2026.',
      },
      {
        fr: 'Cahiers Noematic. Une question par cahier, du récit d’un client à une obligation que l’on peut vérifier.',
        en: 'Cahiers Noematic. One question per cahier, from a client’s story to an obligation you can check.',
      },
    ],
    line: {
      quote: {
        fr: 'Du récit d’un client à une obligation que l’on peut vérifier.',
        en: 'From a client’s story to an obligation you can check.',
      },
      source: {
        fr: 'Cahiers Noematic. Auteur Baptiste Boussemart, éditeur Noematic.',
        en: 'Cahiers Noematic. Written by Baptiste Boussemart, published by Noematic.',
      },
    },
    door: {
      href: person.noematic,
      kicker: 'noematic.eu',
      label: { fr: 'L’éditeur', en: 'The publisher' },
    },
  },
  portfolio: {
    id: 'portfolio',
    href: '/portfolio',
    label: { fr: 'Portfolio', en: 'Portfolio' },
    sentence: {
      fr: 'Ce que j’ai fabriqué, depuis Readjust en 1999.',
      en: 'What I have made, since Readjust in 1999.',
    },
    proofs: [
      {
        fr: 'Readjust, 1999. Le signe de cette page. Premier site, avec Thibaud Jean.',
        en: 'Readjust, 1999. The mark on this page. First site, with Thibaud Jean.',
      },
      {
        fr: 'Des sites tenus dans la durée : Noematic, Qi, le site du peintre Philippe Boussemart, le site du cabinet Qori.',
        en: 'Sites kept over time: Noematic, Qi, the site of the painter Philippe Boussemart, the site of the Qori practice.',
      },
      {
        fr: 'Des jeux et des outils que l’on peut ouvrir : Air Fireman, Sheep Dog, Cozyplanes, Media Cataloger.',
        en: 'Games and tools you can open: Air Fireman, Sheep Dog, Cozyplanes, Media Cataloger.',
      },
    ],
    shelves: [
      {
        id: 'sites',
        title: { fr: 'Sites', en: 'Sites' },
        items: [
          {
            name: 'Noematic',
            href: person.noematic,
            text: { fr: 'Le studio et les missions.', en: 'The studio and the missions.' },
          },
          {
            name: 'Qi',
            href: person.qi,
            text: { fr: 'L’étagère des outils et des jeux.', en: 'The shelf of tools and games.' },
          },
          {
            name: 'Philippe Boussemart',
            href: person.painter,
            text: {
              fr: 'Le site du peintre. Huiles, copies, décors.',
              en: 'The painter’s site. Oils, copies, murals.',
            },
          },
          {
            name: 'Qori',
            href: person.qori,
            text: {
              fr: 'Le site d’un cabinet de traduction.',
              en: 'The site of a translation practice.',
            },
          },
        ],
      },
      {
        id: 'games',
        title: { fr: 'Jeux', en: 'Games' },
        items: [
          {
            name: 'Air Fireman',
            href: qi('air-fireman'),
            text: { fr: 'Éteindre des feux de forêt, aux commandes.', en: 'Put out forest fires, from the cockpit.' },
          },
          {
            name: 'Sheep Dog',
            href: qi('sheep-dog'),
            text: { fr: 'Mener le troupeau, fermer la barrière.', en: 'Herd the flock, close the gate.' },
          },
          {
            name: 'Cozyplanes',
            href: qi('cozyplanes'),
            text: { fr: 'Un aéroport dessiné au doigt.', en: 'An airport drawn with a finger.' },
          },
          {
            name: 'Comptoir',
            href: qi('comptoir'),
            text: { fr: 'Une ville, une fois par jour.', en: 'A city, once a day.' },
          },
        ],
      },
      {
        id: 'tools',
        title: { fr: 'Outils', en: 'Tools' },
        items: [
          {
            name: 'Media Cataloger',
            href: qi('media-cataloger-2'),
            text: { fr: 'Les disques, même au tiroir.', en: 'Disks, even in the drawer.' },
          },
          {
            name: 'PugDB',
            href: qi('pugdb'),
            text: { fr: 'Une base embarquée en Rust.', en: 'An embedded database in Rust.' },
          },
          {
            name: 'AI RAG Agent',
            href: qi('rag-agent'),
            text: { fr: 'La recherche qui reste sur le disque.', en: 'Search that stays on disk.' },
          },
          {
            name: 'WatchNoCode',
            href: qi('watchnocode'),
            text: { fr: 'Les erreurs JS des sites no-code.', en: 'JS errors on no-code sites.' },
          },
        ],
      },
    ],
    marks: [
      {
        years: '1999',
        text: {
          fr: 'Readjust. Le signe, et le premier site.',
          en: 'Readjust. The mark, and the first site.',
        },
      },
      {
        years: '2006',
        text: { fr: 'Ingénieur, ESÉO, Angers.', en: 'Engineer, ESÉO, Angers.' },
      },
      {
        years: '2007',
        text: {
          fr: 'Master, Sherbrooke. Interfaces tangibles.',
          en: 'Master’s, Sherbrooke. Tangible interfaces.',
        },
      },
      {
        years: '2007 — 2018',
        text: {
          fr: 'INRIA, supervision réseau, ingestion, pipelines.',
          en: 'INRIA, network monitoring, ingestion, pipelines.',
        },
      },
      {
        years: '2018 — 2024',
        text: {
          fr: 'Objenious, puis Infura.',
          en: 'Objenious, then Infura.',
        },
      },
      {
        years: '2020 —',
        text: {
          fr: 'Noematic. Missions, outils, enseignement.',
          en: 'Noematic. Missions, tools, teaching.',
        },
      },
    ],
  },
};

export const homeLead: Copy = {
  fr: 'Choisissez ce que vous venez voir.',
  en: 'Choose what you came to see.',
};

export const ui = {
  langLabel: { fr: 'Langue', en: 'Language' },
  readingLabel: { fr: 'Lecture', en: 'Reading' },
  path: { fr: 'Parcours', en: 'Path' },
  also: { fr: 'Aussi', en: 'Also' },
  practice: { fr: 'Pratique', en: 'Practice' },
  marks: { fr: 'Repères', en: 'Marks' },
  line: { fr: 'La ligne', en: 'The line' },
  print: { fr: 'Version imprimable', en: 'Printable version' },
  contact: { fr: 'Contact', en: 'Contact' },
  skip: { fr: 'Aller au contenu', en: 'Skip to content' },
  missingTitle: { fr: 'Page introuvable', en: 'Page not found' },
  missing: {
    fr: 'Cette adresse n’existe pas sur reagere.com.',
    en: 'That address does not exist on reagere.com.',
  },
  back: { fr: 'Retour', en: 'Back' },
  rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
};

export function pageMeta(lens: Lens): { title: Copy; description: Copy } {
  if (lens === 'home') {
    return {
      title: {
        fr: 'reagere — Baptiste Boussemart',
        en: 'reagere — Baptiste Boussemart',
      },
      description: {
        fr: 'CV en ligne de Baptiste Boussemart. Quatre lectures : missions, produits Qi, éditions, portfolio.',
        en: 'Baptiste Boussemart’s online CV. Four readings: missions, Qi products, editions, portfolio.',
      },
    };
  }
  const item = lenses[lens];
  return {
    title: {
      fr: `${item.label.fr} — Baptiste Boussemart`,
      en: `${item.label.en} — Baptiste Boussemart`,
    },
    description: item.sentence,
  };
}
