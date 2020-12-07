import React from 'react';
import styled from 'styled-components';
import { ITheme } from '../Style/Themes';

interface IProps {
  toggleTheme: any;
}

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primaryDk};
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const ThemeToggler = ({ toggleTheme }: IProps) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default ThemeToggler;
