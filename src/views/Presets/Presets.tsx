import React from 'react';

import Presets from '@common/Presets';
import Preset from '@components/Preset';

import { Heading, Row } from './styles';

const PresetGrid = () => {
  return (
    Presets.sections.map((section) => (
      <>
        <Heading>
          {section.title}
        </Heading>
        <Row>
          {section.presets.map((preset, index) => (
            <li key={index} className='item'>
              <Preset shadows={preset.shadows} />
            </li>
          ))}
        </Row>
      </>
    ))
  )
};

export default PresetGrid;
