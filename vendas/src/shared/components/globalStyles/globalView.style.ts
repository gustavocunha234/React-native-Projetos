import styled from 'styled-components/native';
import { theme } from '../../themes/themes';

interface DisplayProps {
  customMargin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  margin: ${(props: any) => (props.customMargin ? props.customMargin : '0px')};
`;