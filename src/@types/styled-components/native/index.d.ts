import 'styled-components';

export default interface ThemeInterface {
  palette: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quartenaryColor: string;

    primaryText: string;
    secondaryText: string;
    tertiaryText: string;
    quartenaryText: string;
  };

  units: {
    none: number;
    half: number;
    base: number;
    double: number;
  };
}
