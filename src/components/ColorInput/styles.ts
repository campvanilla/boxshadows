import styled from 'styled-components';

export const ColorIndicator = styled.span<{ color: string }>`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  border-radius: 4px;
`;
