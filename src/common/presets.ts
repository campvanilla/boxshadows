import { Shadow } from '@common/types';

interface Preset {
  shadows: Array<Shadow>;
  background?: string;
  element?: string;
}

interface Section {
  title: string;
  presets: Array<Preset>;
}

interface PresetData {
  sections: Array<Section>;
}

const MaterializeCSS = [
  {
    background: '#fff',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '2',
        blur: '2',
        spread: '0',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '3',
        blur: '1',
        spread: '-2',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        id: 3,
        inset: false,
        offsetX: '0',
        offsetY: '1',
        blur: '5',
        spread: '0',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    background: '#fff',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '2',
        blur: '5',
        spread: '0',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '1',
        blur: '10',
        spread: '0',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        id: 3,
        inset: false,
        offsetX: '0',
        offsetY: '2',
        blur: '4',
        spread: '-1',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    background: '#fff',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '8',
        blur: '17',
        spread: '2',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '3',
        blur: '14',
        spread: '2',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        id: 3,
        inset: false,
        offsetX: '0',
        offsetY: '5',
        blur: '5',
        spread: '-3',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    background: '#fff',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '16',
        blur: '24',
        spread: '2',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '6',
        blur: '30',
        spread: '5',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        id: 3,
        inset: false,
        offsetX: '0',
        offsetY: '8',
        blur: '10',
        spread: '-7',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    background: '#fff',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '24',
        blur: '38',
        spread: '3',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '9',
        blur: '46',
        spread: '8',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        id: 3,
        inset: false,
        offsetX: '0',
        offsetY: '11',
        blur: '15',
        spread: '-7',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
];

const Stripe = [
  {
    background: '#F6F9FC',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '13',
        blur: '27',
        spread: '-5',
        color: 'rgba(50,50,93,0.25)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '8',
        blur: '16',
        spread: '-8',
        color: 'rgba(0,0,0,0.3)',
      },
      {
        id: 3,
        inset: false,
        offsetX: '0',
        offsetY: '-6',
        blur: '16',
        spread: '-6',
        color: 'rgba(0,0,0,0.025)',
      },
    ],
  },
  {
    background: '#F6F9FC',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '4',
        blur: '6',
        spread: '0',
        color: 'rgba(50,50,93,0.11)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '1',
        blur: '3',
        spread: '0',
        color: 'rgba(0,0,0,0.08)',
      },
    ],
  },
];

const CodeSandbox = [
  {
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '4',
        blur: '4',
        spread: '0',
        color: 'rgba(0,0,0,0.24)',
      },
    ]
  },
]

const TailwindCSS = [
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '0',
        blur: '0',
        spread: '1',
        color: 'rgba(0,0,0,0.05)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '1',
        blur: '2',
        spread: '0',
        color: 'rgba(0,0,0,0.05)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '1',
        blur: '3',
        spread: '0',
        color: 'rgba(0,0,0,0.1)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '1',
        blur: '2',
        spread: '0',
        color: 'rgba(0,0,0,0.06)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '4',
        blur: '6',
        spread: '-1',
        color: 'rgba(0,0,0,0.1)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '2',
        blur: '4',
        spread: '-1',
        color: 'rgba(0,0,0,0.06)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '10',
        blur: '15',
        spread: '-3',
        color: 'rgba(0,0,0,0.1)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '4',
        blur: '6',
        spread: '-2',
        color: 'rgba(0,0,0,0.05)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '20',
        blur: '25',
        spread: '-5',
        color: 'rgba(0,0,0,0.1)',
      },
      {
        id: 2,
        inset: false,
        offsetX: '0',
        offsetY: '10',
        blur: '10',
        spread: '-5',
        color: 'rgba(0,0,0,0.04)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        inset: false,
        offsetX: '0',
        offsetY: '25',
        blur: '50',
        spread: '-12',
        color: 'rgba(0,0,0,0.25)',
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        offsetX: '0',
        offsetY: '2',
        blur: '4',
        spread: '0',
        color: 'rgba(0,0,0,0.06)',
        inset: true,
      },
    ],
  },
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        offsetX: '0',
        offsetY: '0',
        blur: '0',
        spread: '3',
        color: 'rgba(66,153,225,0.5)',
        inset: true,
      },
    ],
  },
];

const Trello = [
  {
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        offsetX: '0',
        offsetY: '1',
        blur: '0',
        spread: '0',
        color: 'rgba(9,30,66,.25)',
        inset: false,
      },
    ],
  },
];

const ThreeD = [
  {
    element: '#e74c3c',
    background: 'rgb(247,250,252)',
    shadows: [
      {
        id: 1,
        offsetX: '0',
        offsetY: '12',
        blur: '0',
        spread: '0',
        color: '#c0392b',
        inset: false,
      },
    ],
  },
];

const Windows95 = [
  {
    element: '#B8B8B8',
    shadows: [
      {
        id: 2,
        offsetX: '5',
        offsetY: '5',
        blur: '0',
        spread: '0',
        color: '#EBEBEB',
        inset: true,
      },
      {
        id: 1,
        offsetX: '-5',
        offsetY: '-5',
        blur: '0',
        spread: '0',
        color: '#818181',
        inset: true,
      },
    ],
  },
];

const Skeuomorphism = [
  {
    element: '#E4EDF7',
    background: '#E0E9F5',
    shadows: [
      {
        id: 1,
        offsetX: '3',
        offsetY: '3',
        blur: '6',
        spread: '0',
        color: '#CCDBE8',
        inset: true,
      },
      {
        id: 2,
        offsetX: '-3',
        offsetY: '-3',
        blur: '6',
        spread: '1',
        color: 'rgba(255,255,255,0.5)',
        inset: true,
      },
    ],
  },
  {
    element: '#E4EDF7',
    background: '#E0E9F5',
    shadows: [
      {
        id: 1,
        offsetX: '6',
        offsetY: '2',
        blur: '16',
        spread: '0',
        color: 'rgba(136, 165, 191, 0.48)',
        inset: false,
      },
      {
        id: 2,
        offsetX: '-6',
        offsetY: '-2',
        blur: '16',
        spread: '0',
        color: 'rgba(255, 255, 255, 0.8)',
        inset: false,
      },
    ],
  },
]

const Presets: PresetData = {
  sections: [
    {
      title: 'Materialize',
      presets: [...MaterializeCSS],
    },
    {
      title: 'TailWindCSS',
      presets: [...TailwindCSS],
    },
    {
      title: '3D',
      presets: [...ThreeD],
    },
    {
      title: 'Skeuomorphism',
      presets: [...Skeuomorphism],
    },
    {
      title: 'Windows 95',
      presets: [...Windows95],
    },
    {
      title: 'Stripe',
      presets: [...Stripe],
    },
    {
      title: 'CodeSandbox',
      presets: [...CodeSandbox],
    },
    {
      title: 'Trello',
      presets: [...Trello],
    },
  ],
};

export default Presets;
