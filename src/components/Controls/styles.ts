import Styled from 'styled-components';

export const ControlsContainer = Styled.div`
  background-color: ${props => props.theme.colors.wildSand};
  width: 500px;
  height: 100vh;

  .control-section {
    border-bottom: 1px solid ${props => props.theme.colors.heather};
    padding: 24px 16px;
  }

  .control-section-heading {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.cloudBurst};
    margin: 0;
    margin-bottom: 24px;
  }

  .control-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    .title {
      flex-basis: 90px;
      margin-top: 0;
      margin-bottom: 0;
      margin-bottom: 4px;
    }

    .control {
      margin-right: 8px;
      margin-bottom: 4px;

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
