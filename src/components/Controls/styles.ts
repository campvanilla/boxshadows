import styled from 'styled-components';

export const ControlPanel = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  overflow-y: auto;
  width: 100%;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.heather};
  display: flex;
  flex-basis: 60px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 16px 18px;
  background-color: ${props => props.theme.colors.wildSand};
  box-shadow: 0 1px 3px 1px rgba(50,50,93,.11), 0 -1px 10px rgba(0,0,0,.08);
`;


export const Aside = styled.aside`
  background-color: ${props => props.theme.colors.wildSand};
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 6;

  .control-section {
    border-bottom: 1px solid ${props => props.theme.colors.heather};
    padding: 24px 16px;
  }

  .control-section:last-child {
    border-bottom: none;
  }

  .control-section-heading {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    color: ${props => props.theme.colors.cloudBurst};
    margin: 0;
    margin-bottom: 24px;
    align-items: center;

    span, svg {
      display: inline-flex;
    }

    span {
      font-weight: 500;
      flex-grow: 1;
    }

    svg {
      margin-right: 8px;
    }

    .add-btn {
      border: none;
      font-size: 24px;
      font-weight: 300;
      color: ${props => props.theme.colors.nepal};
      transition: color 0.15s ease-out;
      background: none;

      &:hover {
        color: ${props => props.theme.colors.hoki};
      }
    }
  }

  .control-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    .title {
      flex-basis: 90px;
      max-width: 90px;
      margin-top: 0;
      margin-bottom: 0;
      margin-bottom: 4px;
    }

    .control {
      margin-right: 8px;
      margin-bottom: 4px;
      max-width: 155px;

      &:last-child {
        margin-right: 0;
      }
    }

    > * {
      margin-right: 20px;

      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;
