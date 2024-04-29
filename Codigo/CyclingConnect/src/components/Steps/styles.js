import styled from 'styled-components/native';

export const ProgressBarWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  padding: ${({lastItem, firstItem}) =>
    lastItem ? '0 0 0 3px' : firstItem ? '0 3px 0 0' : '0'};
`;
