import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 400px;

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
    color: ${props => props.theme.colors.heather};
    margin: 0;
  }

  .link {
    display: inline-block;
    margin-top: 8px;
    font-size: 18px;
    color: ${props => props.theme.colors.cloudBurst};
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: ${props => props.theme.colors.cloudBurst};
    transition: all 0.15s ease-out;

    :hover {
      border-bottom: ${props => props.theme.colors.brightTurquoise};
      color: ${props => props.theme.colors.brightTurquoise};
    }
  }
`;
