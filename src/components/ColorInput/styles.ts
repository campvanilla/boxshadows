import styled from 'styled-components';

export const ColorInputWrapper = styled.span`
  position: relative;
`;

export const ColorIndicator = styled.span<{ color: string }>`
  display: inline-block;
  border: 1px solid ${props => props.theme.colors.heather};
  width: 14px;
  height: 14px;
  background-color: ${props => props.color};
  border-radius: 4px;
`;

export const PickerContainer = styled.div`
  position: absolute;
  z-index: 2;
`;

export const PickerOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
