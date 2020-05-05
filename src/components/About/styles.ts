import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  margin: 0;
  font-style: italic;
`

export const Info = styled.h3`
  color: ${props => props.theme.colors.heather};
  display: inline-block;
  margin: 0;

  .link {
    transition: all 0.15s ease-out;
    text-decoration: none;
    padding-bottom: 4px;
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.colors.brightTurquoise};
  }
`

export const AboutContainer = styled.div`
  margin: 0;
  position: fixed;
  bottom: 120px;
  left: 40px;
  opacity: 0.3;
  transition: opacity 0.15s ease-out;
  background: ${props => props.theme.colors.white};
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);

  :hover {
    opacity: 1;
  }

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    bottom: 45px;
  }
`;
