import React from 'react';

import { PresetsWrapper } from '@styles/common';
import Presets from '@common/presets';
import Preset from '@components/Preset';
import Logo from '@assets/logo-light-medium-400x70.png';

import { PageHeader, Heading, Row } from './styles';

const PresetGrid = () => {
  return (
    <>
      <PageHeader>
        <img src={Logo} className='logo' alt='Logo' />
      </PageHeader>
      <PresetsWrapper>
        {Presets.sections.map((section) => (
          <>
            <Heading>{section.title}</Heading>
            <Row>
              {section.presets.map((preset, index) => (
                <li key={index} className='item'>
                  <Preset shadows={preset.shadows} background={preset.background} element={preset.element} />
                </li>
              ))}
            </Row>
          </>
        ))}
      </PresetsWrapper>
    </>
  );
};

export default PresetGrid;
