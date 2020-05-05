import styled from 'styled-components';

export const OutputArea = styled.main`
  background-color: ${(props) => props.theme.colors.whiteish};
  flex-grow: 1;
  margin-top: 56px;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    margin-top: 86px;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-direction: row;
  }
`;

export const AsideHeaderIcons = styled.span`
  padding: 13px;

  svg {
    width: 18px;
    margin-left: 20px;
    cursor: pointer;
  }

  svg path {
    stroke: ${(props) => props.theme.colors.nepal};
  }

  svg:hover path {
    stroke: ${(props) => props.theme.colors.cloudBurst};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: none;
  }
`;

export const AsideHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-top: 1px solid ${(props) => props.theme.colors.heather};
  border-bottom: 1px solid ${(props) => props.theme.colors.heather};

  .logo {
    max-height: 35px;
  }

  .copy-btn {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    .copy-btn {
      display: initial;
    }
  }
`;

export const Aside = styled.aside<{ open?: boolean }>`
  background-color: ${(props) => props.theme.colors.wildSand};
  display: flex;
  flex-direction: column;
  height: 77px;
  transition: height 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  overflow-y: hidden;

  ${(props) => props.open && `height: 50%;`}

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex-direction: column-reverse;
    width: 500px;
    height: 100%;
  }
`;

export const AsideContent = styled.section`
  flex-grow: 1;
  overflow-y: auto;
`;
