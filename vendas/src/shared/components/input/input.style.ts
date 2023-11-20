import styled from 'styled-components/native';

import { theme } from '../../themes/themes';
import { Icon } from '../icon/Icon';

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 12px;

  padding-right: ${(props: any) => (props.hasSecureTextEntry ? '52px' : '16px')};

  border-width: 1px;
  border-color: ${(props: any) =>
    props.isError ? theme.colors.OrangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 10px;
`;

export const IconSearch = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 9px;
`;