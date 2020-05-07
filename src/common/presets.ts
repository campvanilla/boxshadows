import { Shadow } from '@common/types';

interface Preset {
  name: string;
  shadows: Array<Shadow>;
  background?: string;
  element?: string;
  borderColor?: string;
  borderThickness?: string;
}

interface Section {
  title: string;
  id: string;
  presets: Array<Preset>;
}

interface PresetData {
  sections: Array<Section>;
}

const MaterializeCSS: Array<Preset> = [
  {
    name: 'Material Design Level 1',
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
    name: 'Material Design Level 2',
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
    name: 'Material Design Level 3',
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
    name: 'Material Design Level 4',
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
    name: 'Material Design Level 5',
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

const Stripe: Array<Preset> = [
  {
    name: 'Stripe Card',
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
    name: 'Stripe Button',
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

const CodeSandbox: Array<Preset> = [
  {
    name: 'Codesandbox Card',
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

const TailwindCSS: Array<Preset> = [
  {
    name: 'Tailwind xs',
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
    name: 'Tailwind sm',
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
    name: 'Tailwind base',
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
    name: 'Tailwind md',
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
    name: 'Tailwind lg',
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
    name: 'Tailwind xl',
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
    name: 'Tailwind 2xl',
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
    name: 'Tailwind inner',
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
    name: 'Tailwind outline',
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

const Trello: Array<Preset> = [
  {
    name: 'Trello Card',
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

const ThreeD: Array<Preset> = [
  {
    name: '3D Button',
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

const Comic: Array<Preset> = [
  {
    name: 'Comic Button',
    element: '#FFFFFF',
    background: '#FFFFFF',
    borderThickness: '2',
    borderColor: '#000000',
    shadows: [
      {
        id: 1,
        offsetX: '0',
        offsetY: '5',
        blur: '0',
        spread: '0',
        color: '#000000',
        inset: false,
      },
    ],
  },
];

const Windows95: Array<Preset> = [
  {
    name: 'Windows95 Button',
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

const Minecraft: Array<Preset> = [
  {
    name: 'Minecraft Button',
    element: '#686868',
    background: '#7c7c7c',
    borderThickness: '2',
    borderColor: '#000000',
    shadows: [
      {
        id: 1,
        offsetX: '-2',
        offsetY: '-4',
        blur: '0',
        spread: '0',
        color: '#0006',
        inset: true,
      },
      {
        id: 2,
        offsetX: '2',
        offsetY: '2',
        blur: '0',
        spread: '0',
        color: '#FFF7',
        inset: true,
      },
    ],
  },
];

const Skeuomorphism: Array<Preset> = [
  {
    name: 'Skeuomorphism Indent',
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
    name: 'Skeuomorphism Bump',
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
      id: 'preset-section--materialize',
    },
    {
      title: 'TailWindCSS',
      presets: [...TailwindCSS],
      id: 'preset-section--tailwindcss',
    },
    {
      title: '3D',
      presets: [...ThreeD],
      id: 'preset-section--3d',
    },
    {
      title: 'Comic',
      presets: [...Comic],
      id: 'preset-section--comic',
    },
    {
      title: 'Minecraft',
      presets: [...Minecraft],
      id: 'preset-section--minecraft',
    },
    {
      title: 'Skeuomorphism',
      presets: [...Skeuomorphism],
      id: 'preset-section--skeu',
    },
    {
      title: 'Windows 95',
      presets: [...Windows95],
      id: 'preset-section--windows95',
    },
    {
      title: 'Stripe',
      presets: [...Stripe],
      id: 'preset-section--stripe',
    },
    {
      title: 'CodeSandbox',
      presets: [...CodeSandbox],
      id: 'preset-section--codesandbox',
    },
    {
      title: 'Trello',
      presets: [...Trello],
      id: 'preset-section--trello',
    },
  ],
};

export default Presets;
