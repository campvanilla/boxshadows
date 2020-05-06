import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 24px 80px;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;

    >img {
      height: 45px;
      width: auto;
    }
  }

  .blurb {
    text-align: center;
    font-size: 14px;
    color: ${(props) => props.theme.colors.hoki};
    margin: 0;
  }

  .link {
    display: inline-block;
    margin-top: 8px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.cloudBurst};
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: ${(props) => props.theme.colors.cloudBurst};
    transition: all 0.15s ease-out;

    :hover {
      border-bottom: ${(props) => props.theme.colors.brightTurquoise};
      color: ${(props) => props.theme.colors.brightTurquoise};
    }
  }

  .hidden-link {
    text-decoration: none;
    border: none;
    color: inherit;
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }

  .cta-container {
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .cta {
    margin: 10px 0;
    display: inline-block;
    transition: all 0.3s;
    padding: 8px 12px;
    font-weight: 500;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme.colors.white};
    border: none;

    svg {
      margin-right: 8px;
      height: 20px;
      width: 22px;
      path {
        stroke: ${(props) => props.theme.colors.white};
      }
    }

    &.github  {
      background-color: ${props => props.theme.colors.shark};
    }

    &.twitter {
      background-color: ${props => props.theme.colors.pacificBlue};
    }
  }
`;
