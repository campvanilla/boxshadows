import React, { useCallback, MouseEvent } from 'react';

import PRESETS from '@common/presets';
import Preset from '@components/Preset';

import { Heading, Row, PresetsWrapper } from './styles';
import { FullHeightPage, ContentArea, Aside, AsideMobileIcons } from '@src/components/Page';
import { List } from '@components/icons';


const PresetGrid: React.FC = () => {

  const scrollToSection = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const { target } = event;
    const id = (target as HTMLAnchorElement).getAttribute('data-scroll-to');
    if (typeof id === 'string') {
      const element = document.getElementById(id);
      element?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <FullHeightPage>
      <ContentArea>
        <PresetsWrapper>
        {PRESETS.sections.map((section) => (
          <>
            <Heading id={section.id}>{section.title}</Heading>
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
          PRESETS.sections.map(section => <li key={section.title}>
            <a role='button' data-scroll-to={section.id} onClick={scrollToSection}>{section.title}</a>
          </li>)
        }
        </ul>
      </Aside>
    </FullHeightPage>
  );
};

export default PresetGrid;
