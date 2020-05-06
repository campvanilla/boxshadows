import React from 'react';

import PRESETS from '@common/presets';
import Preset from '@components/Preset';

import { Heading, Row, PresetsWrapper } from './styles';
import { FullHeightPage, ContentArea, Aside, AsideMobileIcons } from '@src/components/Page';
import { List } from '@components/icons';


const PresetGrid = () => {
  return (
    <FullHeightPage>
      <ContentArea>
        <PresetsWrapper>
        {PRESETS.sections.map((section) => (
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
      </ContentArea>
      <Aside headerAfter={({ toggleAside }) => (
        <AsideMobileIcons>
          <List onClick={toggleAside} />
        </AsideMobileIcons>
      )}>
        <ul>
        {
          PRESETS.sections.map(section => <li key={section.title}>{section.title}</li>)
        }
        </ul>
      </Aside>
    </FullHeightPage>
  );
};

export default PresetGrid;
