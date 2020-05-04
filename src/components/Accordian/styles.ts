import styled from 'styled-components';

interface AccordianItemContainerProps {
  open: boolean;
}

export const AccordianItemContainer = styled.section<AccordianItemContainerProps>`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.whiteish};
  margin-top: 22px;

  &:first-child {
    margin-top: 0;
  }

  .header {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 16px;
  }

  .toggle-btn {
    color: ${props => props.theme.colors.nepal};
    transform: ${(props) => (props.open ? 'rotateZ(270deg)' : 'rotateZ(90deg)')};
    transition: transform 0.15s ease-out, color 0.15s ease-out;

    &:hover {
      color: ${props => props.theme.colors.hoki};
    }
  }

  .content {
    padding: 10px 16px;
    padding-bottom: 20px;
  }
`;
