import { Shadow } from '@common/types';

interface Preset {
  shadows: Array<Shadow>;
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
    shadows: [
      {
        offsetX: '0',
        offsetY: '2',
        blur: '2',
        spread: '0',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        offsetX: '0',
        offsetY: '3',
        blur: '1',
        spread: '-2',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        offsetX: '0',
        offsetY: '1',
        blur: '5',
        spread: '0',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    shadows: [
      {
        offsetX: '0',
        offsetY: '2',
        blur: '5',
        spread: '0',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        offsetX: '0',
        offsetY: '1',
        blur: '10',
        spread: '0',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        offsetX: '0',
        offsetY: '2',
        blur: '4',
        spread: '-1',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    shadows: [
      {
        offsetX: '0',
        offsetY: '8',
        blur: '17',
        spread: '2',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        offsetX: '0',
        offsetY: '3',
        blur: '14',
        spread: '2',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        offsetX: '0',
        offsetY: '5',
        blur: '5',
        spread: '-3',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    shadows: [
      {
        offsetX: '0',
        offsetY: '16',
        blur: '24',
        spread: '2',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        offsetX: '0',
        offsetY: '6',
        blur: '30',
        spread: '5',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        offsetX: '0',
        offsetY: '8',
        blur: '10',
        spread: '-7',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
  {
    shadows: [
      {
        offsetX: '0',
        offsetY: '24',
        blur: '38',
        spread: '3',
        color: 'rgba(0,0,0,0.14)',
      },
      {
        offsetX: '0',
        offsetY: '9',
        blur: '46',
        spread: '8',
        color: 'rgba(0,0,0,0.12)',
      },
      {
        offsetX: '0',
        offsetY: '11',
        blur: '15',
        spread: '-7',
        color: 'rgba(0,0,0,0.2)',
      },
    ],
  },
];

const Presets: PresetData = {
  sections: [
    {
      title: 'Materialize',
      presets: [
        ...MaterializeCSS,
      ]
    },
  ]
}

export default Presets;
