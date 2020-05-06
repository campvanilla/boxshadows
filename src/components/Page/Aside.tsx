import React, { useState, useCallback } from 'react';
import { StyledAside, AsideHeader, AsideContent } from './styles';

import { RenderPropFunction, renderChild } from '@utils/react';
import { Logo } from '@src/components/Logo';

export interface AsideProps {
  headerBefore?: RenderPropFunction<HeaderInjectedProps>;
  headerAfter?: RenderPropFunction<HeaderInjectedProps>;
}

export interface HeaderInjectedProps {
  toggleAside: () => void;
}

export const Aside: React.FC<AsideProps> = ({
  headerBefore,
  headerAfter,
  children,
}) => {
  const [asideOpen, setAsideState] = useState<boolean>(false);
  const toggleAside = useCallback(() => {
    console.log("asideOpen", asideOpen)

    setAsideState(state => !state);
  }, []);

  return (
    <StyledAside open={asideOpen}>
      <AsideHeader>
        {renderChild(headerBefore, {toggleAside})}
        <Logo />
        {renderChild(headerAfter, {toggleAside})}
      </AsideHeader>
      <AsideContent>
        {renderChild(children)}
      </AsideContent>
    </StyledAside>
  )
}
