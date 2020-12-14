export interface ITheme {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
  [key: string]: string;
}

export const lightTheme = {
  primary: 'var(--c-light-primary)',
  primaryLt: 'var(--c-light-primary-lt)',
  primaryDk: 'var(--c-light-primary-dk)',
  secondary: 'var(--c-light-secondary)',
  textPrimary: 'var(--c-light-text-primary)',
  textSecondary: 'var(--c-light-text-secondary)',
  textTertiary: 'var(--c-light-text-tertiary)',
  borderPrimary: 'var(--c-light-border-primary)',
  brandBlue: 'var(--c-light-brand-blue)',
  brandBlueMuted: 'var(--c-light-brand-blue-muted)',
};

export const darkTheme = {
  primary: 'var(--c-dark-primary)',
  primaryLt: 'var(--c-dark-primary-dk)',
  primaryDk: 'var(--c-dark-primary-lt)',
  secondary: 'var(--c-dark-secondary)',
  textPrimary: 'var(--c-dark-text-primary)',
  textSecondary: 'var(--c-dark-text-secondary)',
  textTertiary: 'var(--c-dark-text-tertiary)',
  borderPrimary: 'var(--c-dark-border-primary)',
  brandBlue: 'var(--c-light-brand-blue)',
  brandBlueMuted: 'var(--c-light-brand-blue-muted)',
};
