import { createGlobalStyle } from "styled-components";
import { ITheme } from './Themes';

interface IProps {
  theme: ITheme;
}

export default createGlobalStyle`
  body {
    background: ${({ theme }: IProps) => theme.primary};
    color: ${({ theme }: IProps) => theme.textPrimary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
    box-sizing: border-box;
  }
`;

// transition: background-color 0.3s, color 0.3s;
