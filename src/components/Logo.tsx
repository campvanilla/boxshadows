import React from 'react';
import styled from 'styled-components';

import LogoIcon from '@assets/logo-icon-only.svg';

export interface LogoProps {
  tag?: string;
  hideText?: boolean;
}

const StyledLogo = styled.div`
  display: inline-flex;
  font-family: ${(props) => props.theme.fonts.logo};
  font-weight: 400;
  font-style: normal;
  align-items: center;
  letter-spacing: 1px;
  user-select: none;

`;

const LogoText = styled.h1<{ hiddenSmall: boolean }>`
  font-weight: inherit;
  margin: 0;
  strong {
    font-weight: 600;
  }

  opacity: 0.9;

  &,
  strong {
    font-size: 23px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.slateGray};
  }

  ${props => props.hiddenSmall && `
    @media (max-width: ${props.theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

export const Logo: React.FC<LogoProps> = ({
  tag,
  hideText,
}: LogoProps) => {
  return (
    <StyledLogo title='boxshadows.com'>
      <img src={LogoIcon} alt='boxshadows.com' width='40' />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LogoText as={tag as any} hideMobile={hideText}>
        <strong>box</strong>shadows
      </LogoText>
    </StyledLogo>
  );
};

Logo.defaultProps = { tag: 'h1', hideText: false };
