import styled from 'styled-components';

export const ControlsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  width: 100%;

  .control-section {
    border-bottom: 1px solid ${(props) => props.theme.colors.heather};
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
    color: ${(props) => props.theme.colors.cloudBurst};
    margin: 0;
    margin-bottom: 24px;
    align-items: center;

    span,
    svg {
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
      color: ${(props) => props.theme.colors.nepal};
      transition: color 0.15s ease-out;
      background: none;

      &:hover {
        color: ${(props) => props.theme.colors.hoki};
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 500;
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
