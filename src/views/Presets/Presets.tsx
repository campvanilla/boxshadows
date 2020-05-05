import React from 'react';

import { PresetsWrapper } from '@styles/common';
import Presets from '@common/Presets';
import Preset from '@components/Preset';

import { Heading, Row } from './styles';

const PresetGrid = () => {
  return (
    <PresetsWrapper>
      {
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
      }
    </PresetsWrapper>
  )
};

export default PresetGrid;
