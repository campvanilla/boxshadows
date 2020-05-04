import styled from 'styled-components';

export const ColorInputWrapper = styled.span`
  position: relative;
`;

export const ColorIndicator = styled.span<{ color: string }>`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  border-radius: 4px;
`;

export const PickerContainer = styled.div`
  position: absolute;
  z-index: 2
`;
